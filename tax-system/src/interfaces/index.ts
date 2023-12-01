import { ProductData } from "@/types";

export interface IConcreteTaxState extends IConcreteTaxRates {
    product: ProductData;
    taxRates: IConcreteTaxRates | string;
}

export interface IConcreteTaxRates {
    salesTax: number;
    exciseTax: number;
    totalTaxRate: number;
    federalTax: number;
}
