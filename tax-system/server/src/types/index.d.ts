import { IConcreteTaxRates } from "../interfaces";

export type ProductData = {
    productId: string,
    year: string;
    fiscalState: string;
    baseValue: number;
    totalValue?: number;
};

export type TaxInfo = {
    taxRates?: IConcreteTaxRates;
    error?: string;
};

export type YearsTaxMethodMap = {
    [year: string]: () => void;
};

export type StateFactoryMap = { [key: string]: (product: ProductData) => TaxInfo };
export type TaxRateMethod = () => void;
export type TaxRateMethodName = `year${number}`;