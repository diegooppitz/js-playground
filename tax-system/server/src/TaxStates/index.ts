import { ProductData, TaxInfo, StateFactoryMap } from "src/types";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";

export class TaxStates {
    taxInfo: TaxInfo;
    #federalTax: number;
    #stateFactoryMap: StateFactoryMap = {
        'california': (product) => this.#createCalifornia(product),
        'ohio': (product) => this.#createOhio(product),
        'new_york': (product) => this.#createNewYork(product),
    };

    constructor(product: ProductData, federalTaxRate: number) {
        this.#federalTax = federalTaxRate;
        this.taxInfo = {};
        this.#getTaxRates(product);
    }

    #getTaxRates(product: ProductData) {
        const stateFactory = this.#stateFactoryMap[product.fiscalState.toLowerCase()];
        if (stateFactory) this.taxInfo = stateFactory(product) 
        else this.taxInfo.error = "Error: Invalid fiscal state";
    }

    #createCalifornia(product: ProductData): TaxInfo {
        const california = new California(product, this.#federalTax);
        const result = california.getTaxRates();

        if (typeof result === 'string') {
            return { error: result };
        }
        return { taxRates: result };
    }

    #createOhio(product: ProductData): TaxInfo {
        const ohio = new Ohio(product, this.#federalTax);
        const result = ohio.getTaxRates();

        if (typeof result === 'string') {
            return { error: result };
        }
        return { taxRates: result };
    }

    #createNewYork(product: ProductData): TaxInfo {
        const ohio = new NewYork(product, this.#federalTax);
        const result = ohio.getTaxRates();

        if (typeof result === 'string') {
            return { error: result };
        }
        return { taxRates: result };
    }
}