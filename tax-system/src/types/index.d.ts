export type ProductData = {
    productId: string,
    year: string;
    fiscalState: string;
    baseValue: number;
    totalValue?: number;
};


export type TaxRateMethod = () => void;
export type TaxRateMethodName = `year${number}`;

export type ErrorInfo = {
    error: string;
};