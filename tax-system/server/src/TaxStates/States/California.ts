import { IConcreteTaxState } from "src/interfaces";
import { ProductData, YearsTaxMethodMap } from "src/types";
import { calculateTotalTax } from "./Common";

export class California implements IConcreteTaxState {
    taxRates
    product
    errorMsg

    #yearTaxMethods: YearsTaxMethodMap

    constructor(product: ProductData, federalTaxRate: number) {
        this.product = product;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: federalTaxRate, totalTaxRate: 0 };
        this.errorMsg = ''

        this.#yearTaxMethods = {
            '2010': this.#year2010,
            '2014': this.#year2014,
            '2017': this.#year2017,
            '2018': this.#year2018,
            '2019': this.#year2019,
        };

        this.#calculateTaxRateForYear(this.product.year);
    }

    getTaxRates() {
        return this.errorMsg ? this.errorMsg : this.taxRates;
    }

    #calculateTaxRateForYear(year: string) {
        if (this.#yearTaxMethods[year]) this.#yearTaxMethods[year].call(this);
        else {
            let closestYear = this.#findClosestYear(year);

            if (closestYear) this.#yearTaxMethods[closestYear].call(this);
            else {
                this.errorMsg = 'No tax data available for the year.';
            }
        }
    }

    #findClosestYear(targetYear: string): string | null {
        const targetYearInt = parseInt(targetYear);
        const startYear = 2009
        const offsetForArrayIndex = 1;
    
        const yearsArray = Array.from(
            { length: targetYearInt - startYear }, 
            (_, index) => (targetYearInt - index - offsetForArrayIndex).toString()
        );
    
        return yearsArray.find(year => this.#yearTaxMethods[year]) || null;
    }

    #year2010() {
        this.taxRates.salesTax = 6;
        this.taxRates.exciseTax = 15;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2014() {
        this.taxRates.salesTax = 7;
        this.taxRates.exciseTax = 15;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2017() {
        this.taxRates.salesTax = 8;
        this.taxRates.exciseTax = 15;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2018() {
        this.taxRates.salesTax = 8.5;
        this.taxRates.exciseTax = 18;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2019() {
        this.taxRates.salesTax = 9;
        this.taxRates.exciseTax = 20;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }
}