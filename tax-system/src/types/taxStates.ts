import { ProductData } from "./product";

export interface IConcreteTaxState {
    product: ProductData;
    getTaxRates(): number;
}