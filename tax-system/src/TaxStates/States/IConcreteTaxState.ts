import { ProductData } from "../../types/product";

export interface IConcreteTaxState {
    product: ProductData;

    getTaxRates(): number;
}