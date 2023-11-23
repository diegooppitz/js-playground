import { ProductData } from "../../types/product";
import { IConcreteTaxState } from "./IConcreteTaxState";

export class California implements IConcreteTaxState {
    product: ProductData;

    constructor(product: ProductData) {
        this.product = product;
    }

    getTaxRates(): number {
        return 10;
    }
}