import { ProductData, TaxInfo, StateFactoryMap } from "src/types";
import { California } from "./States/California";
import { Florida } from "./States/Florida";
import { Ohio } from "./States/Ohio";
import { NewYork } from "./States/NewYork";
import { Illinois } from "./States/Illinois";


export class TaxStates {
    taxInfo: TaxInfo;
    #federalTax: number;
    #stateFactoryMap: StateFactoryMap = {
        'california': (product) => this.#createCalifornia(product),
        'florida': (product) => this.#createFlorida(product),
        'illinois': (product) => this.#createIllinois(product),
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

    #createFlorida(product: ProductData): TaxInfo {
        const florida = new Florida(product, this.#federalTax);
        const result = florida.getTaxRates();

        if (typeof result === 'string') {
            return { error: result };
        }
        return { taxRates: result };
    }

    #createIllinois(product: ProductData): TaxInfo {
        const illinois = new Illinois(product, this.#federalTax);
        const result = illinois.getTaxRates();

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
        const newYork = new NewYork(product, this.#federalTax);
        const result = newYork.getTaxRates();

        if (typeof result === 'string') {
            return { error: result };
        }
        return { taxRates: result };
    }
}