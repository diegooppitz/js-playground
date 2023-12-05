export type ProductData = {
    productId: string,
    year: string;
    fiscalState: string;
    baseValue: number;
    totalValue?: number;
};

type TaxInfo = {
    taxRates?: IConcreteTaxRates;
    error?: string;
};

export type TaxRateMethod = () => void;
export type TaxRateMethodName = `year${number}`;