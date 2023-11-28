import { ProductData } from "../types/product";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";

export class TaxStates {
    #product: ProductData | null = null

    // #stateFactoryMap: { [key: string]: (product: ProductData) => number | string } = {
    //     'california': this.#createCalifornia,
    //     // 'ohio': this.#createOhio,
    //     // 'new-york': this.#createNewYork
    // };

    getTaxRates(product: ProductData) {
        if(product) return this.#createFiscalState(product);
        return "Undefined state fiscal value"
    }

    #createFiscalState(product: ProductData) {
            // const factoryFunction = this.#stateFactoryMap[product.fiscalState];
            // if (!factoryFunction) return "State fiscal doesn't exist"
            // return factoryFunction(product);
            this.#createCalifornia(product);
    }

    #createCalifornia(product: ProductData) {
        const california = new California(product);
        const taxRates = california.taxRates;
        console.log("taxRates", taxRates)
    }

    // #createOhio(product: ProductData): Ohio {
    //     return new Ohio(product);
    // }

    // #createNewYork(product: ProductData): NewYork {
    //     return new NewYork(product);
    // }
}