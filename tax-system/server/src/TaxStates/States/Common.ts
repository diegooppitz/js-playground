import { IConcreteTaxRates } from "src/interfaces";

export const calcTaxRateForYear = (year: string, context: any) => {
    const methodName: string = `year${year}`;

    if (typeof (context)[methodName] === 'function') {
        (context)[methodName]();
        return '';
    } else return "Error: Unregistred year";
}

export function calculateTotalTax(taxRates: IConcreteTaxRates): { totalTaxRate: number, errorMsg: string } {
    taxRates.totalTaxRate = taxRates.salesTax + taxRates.exciseTax + taxRates.federalTax;
    let errorMsg = '';

    if (!taxRates.totalTaxRate) errorMsg = "Error: Calculate year tax rates error";
    

    return { totalTaxRate: taxRates.totalTaxRate, errorMsg };
}