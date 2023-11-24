import { ProductData } from "../types/product";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";

export class TaxStates {
    #product: ProductData | null = null

    #stateFactoryMap: { [key: string]: (product: ProductData) => number | string } = {
        'california': this.#createCalifornia,
        // 'ohio': this.#createOhio,
        // 'new-york': this.#createNewYork
    };

    getTaxRates(product: ProductData) {
        if(product) return this.#createFiscalState(product);
        return "Undefined state fiscal value"
    }

    #createFiscalState(product: ProductData): number | string {
            const factoryFunction = this.#stateFactoryMap[product.fiscalState];
            if (!factoryFunction) return "State fiscal doesn't exist"
            return factoryFunction(product);
    }

    #createCalifornia(product: ProductData): number {
        const california = new California(product);
        return california.getTaxRates()
    }

    // #createOhio(product: ProductData): Ohio {
    //     return new Ohio(product);
    // }

    // #createNewYork(product: ProductData): NewYork {
    //     return new NewYork(product);
    // }
}