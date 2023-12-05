import { ProductData } from "@/types";

export interface IConcreteTaxState {
    product: ProductData;
    taxRates: IConcreteTaxRates;
    errorMsg: string;
    getTaxRates(): string | IConcreteTaxRates;
}

export interface IConcreteTaxRates {
    salesTax: number;
    exciseTax: number;
    totalTaxRate: number;
    federalTax: number;
}
