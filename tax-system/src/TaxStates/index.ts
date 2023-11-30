import { ProductData } from "@/types";
import { California } from "./States/California";
import { NewYork } from "./States/NewYork";
import { Ohio } from "./States/Ohio";

interface TaxRates {
    sales: number;
    excise: number;
    federal: number;
    total: number; 
}
export class TaxStates {
    #stateFactoryMap: { [key: string]: (product: ProductData,) => TaxRates | string} = {
        'california': this.#createCalifornia,
        // 'ohio': this.#createOhio,
        // 'new-york': this.#createNewYork
    };

    getTaxRates(product: ProductData) {
        const stateFactory = this.#stateFactoryMap[product.fiscalState.toLowerCase()];
        if (stateFactory && product) return stateFactory(product);
        return "Undefined state fiscal value";
    }

    #createCalifornia(product: ProductData) {
        const california = new California(product, 5);
        return california?.taxRates ?? 'Undefined fiscal state or year';
    }

    // #createOhio(product: ProductData) {
    //     const ohio = new Ohio(product);
    //     return ohio?.taxRates ?? 'Undefined fiscal state or year';
    // }

    // #createNewYork(product: ProductData) {
    //     const newYork = new NewYork(product);
    //     return newYork?.taxRates ?? 'Undefined fiscal state or year';
    // }
}