import { ProductData } from "@/types";

export interface IConcreteTaxState extends IConcreteTaxRates {
    product: ProductData;
}

export interface IConcreteTaxRates {
    salesTax: number;
    exciseTax: number;
    totalTaxRate: number;
    federalTax: number;
}
