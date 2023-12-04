import { ProductData, ErrorInfo } from "@/types";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";
import { IConcreteTaxRates } from "@/interfaces";

export class TaxStates {
    federalTax: number
    taxRates: IConcreteTaxRates;
    #stateFactoryMap: { [key: string]: (product: ProductData) => IConcreteTaxRates | string} = {
        'california': this.#createCalifornia, 
        // 'ohio': this.#createOhio,
        // 'new-york': this.#createNewYork
    };

    constructor(product: ProductData) {
        this.federalTax = 5;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: 5, totalTaxRate: 0 };
        this.#getTaxRates(product);
    }

    #getTaxRates(product: ProductData) {
        const stateFactory = this.#stateFactoryMap[product.fiscalState.toLowerCase()];
        if (product) stateFactory(product);
    }

    #createCalifornia(product: ProductData) {
        const california = new California(product, 5);
        const stateTaxRates: IConcreteTaxRates | ErrorInfo = california.getTaxRates();
    
        console.log("error", 'error' in stateTaxRates)

        if ('error' in stateTaxRates) return stateTaxRates.error;
        return stateTaxRates;
    }
    
    // #createOhio(product: ProductData) {
    //     const ohio = new Ohio(product, 5); // colocar federal tax aqui
    //     return ohio?.getTaxState() ?? this.#errorMsg;
    // }

    // #createNewYork(product: ProductData) {
    //     const newYork = new NewYork(product, 5); // colocar federal tax aqui
    //     return newYork?.getTaxState() ?? this.#errorMsg;
    // }
}