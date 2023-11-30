import { ProductData } from "@/types";

export interface IConcreteTaxState {
    product: ProductData;
    taxRates: IConcreteTaxRates;
    calcTaxRateForYear(): void;
    calculateTotalTax(): void;
}

export interface IConcreteTaxRates {
    sales: number;
    excise: number;
    federal: number;
    total: number; 
}