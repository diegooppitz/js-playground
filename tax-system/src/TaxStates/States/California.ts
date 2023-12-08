import { IConcreteTaxState } from "@/interfaces";
import { ProductData } from "@/types";
import { calcTaxRateForYear, calculateTotalTax } from "./Common";

export class California implements IConcreteTaxState {
    taxRates
    product
    errorMsg

    constructor(product: ProductData, federalTaxRate: number) {
        this.product = product;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: federalTaxRate, totalTaxRate: 0 };
        this.errorMsg = ''
        
        this.errorMsg = calcTaxRateForYear(this.product.year, this);
    }

    getTaxRates() {
        return this.errorMsg ? this.errorMsg : this.taxRates;
    }

    private year2010() {
        this.taxRates.exciseTax = 15;
        this.taxRates.salesTax = 5;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) {
            this.errorMsg = result.errorMsg;
        };
    }

    private year2011() {
        this.taxRates.salesTax = 5;
        this.taxRates.exciseTax = 15;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) {
            this.errorMsg = result.errorMsg;
        };
    }

    private year2014() {
        this.taxRates.salesTax = 6;
        this.taxRates.exciseTax = 10;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) {
            this.errorMsg = result.errorMsg;
        };
    }

    private year2017() {
        this.taxRates.salesTax = 8;
        this.taxRates.exciseTax = 11;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) {
            this.errorMsg = result.errorMsg;
        };
    }
}