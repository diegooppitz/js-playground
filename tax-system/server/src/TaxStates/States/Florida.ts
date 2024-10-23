import { IConcreteTaxState } from "src/interfaces";
import { ProductData, YearsTaxMethodMap } from "src/types";
import { calculateTotalTax } from "./Common";

export class Florida implements IConcreteTaxState {
    taxRates
    product
    errorMsg

    #yearTaxMethods: YearsTaxMethodMap

    constructor(product: ProductData, federalTaxRate: number) {
        this.product = product;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: federalTaxRate, totalTaxRate: 0 };
        this.errorMsg = ''

        this.#yearTaxMethods = {
            '2014': this.#year2014,
            '2018': this.#year2018,
            '2020': this.#year2020,
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

    #year2014() {
        this.taxRates.salesTax = 5.5;
        this.taxRates.exciseTax = 10;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2018() {
        this.taxRates.salesTax = 6;
        this.taxRates.exciseTax = 11.5;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }

    #year2020() {
        this.taxRates.salesTax = 5.5;
        this.taxRates.exciseTax = 11;
        const result = calculateTotalTax(this.taxRates);

        if (result.errorMsg) this.errorMsg = result.errorMsg;
    }
}