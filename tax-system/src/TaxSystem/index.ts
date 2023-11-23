import { ProductData } from "../types/product";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";

export class TaxStates {
    product: ProductData | null = null

    constructor(product?: ProductData) {
        this.product = product || null;
    }

    private static stateFactoryMap: { [key: string]: (product: ProductData) => TaxStates } = {
        'California': TaxStates.createCalifornia,
        'Ohio': TaxStates.createOhio,
        'NewYork': TaxStates.createNewYork
    };

    static create(product: ProductData): TaxStates {
        const factoryFunction = this.stateFactoryMap[product.fiscalState];
        if (!factoryFunction) {
            throw new Error('Estado fiscal desconhecido');
        }
        return factoryFunction(product);
    }

    calculateTax(): number {
        throw new Error("Método 'calculateTax' não implementado.");
    }

    static createCalifornia(product: ProductData): California {
        return new California(product);
    }

    static createOhio(product: ProductData): Ohio {
        return new Ohio(product);
    }

    static createNewYork(product: ProductData): NewYork {
        return new NewYork(product);
    }
}