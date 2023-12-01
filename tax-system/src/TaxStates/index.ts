import { ProductData } from "@/types";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";
import { IConcreteTaxRates } from "@/interfaces";

export class TaxStates {
    federalTax: number
    taxRates: IConcreteTaxRates | string;
    #createClassError = 'Create taxState object error';
    #stateFactoryMap: { [key: string]: (product: ProductData) => IConcreteTaxRates | string} = {
        'california': this.#createCalifornia, 
        'ohio': this.#createOhio,
        'new-york': this.#createNewYork
    };

    constructor(product: ProductData) {
        this.federalTax = 5;
        this.taxRates = { sales: 0, excise: 0, federal: this.federalTax, total: 0 };
        this.#getTaxRates(product);
    }

    #getTaxRates(product: ProductData) {
        const stateFactory = this.#stateFactoryMap[product.fiscalState.toLowerCase()];
        console.log("state factory", stateFactory)
        console.log("product", product)
        if (product) this.taxRates = stateFactory(product);
        else this.taxRates = "State fiscal tax rates value is undefined";
    }

    #createCalifornia(product: ProductData) {
        const california = new California(product, 5); // colocar federal tax aqui
        return california.getTaxState() ?? this.#createClassError;
    }

    #createOhio(product: ProductData) {
        const ohio = new Ohio(product, 5); // colocar federal tax aqui
        return ohio?.getTaxState() ?? this.#createClassError;
    }

    #createNewYork(product: ProductData) {
        const newYork = new NewYork(product, 5); // colocar federal tax aqui
        return newYork?.getTaxState() ?? this.#createClassError;
    }
}