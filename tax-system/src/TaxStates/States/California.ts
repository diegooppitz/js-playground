import { ProductData } from "../../types/product";
import { IConcreteTaxState } from "../../types/taxStates";

export class California implements IConcreteTaxState {
    product: ProductData;

    #SALES_TAX_RATES = {
        2005: 11,
        2010: 13,
        2015: 10,
        2017: 15,
    };

    #EXCISE_TAX_RATES = {
        2015: 5,
        2018: 6,
        2020: 8,
        2023: 0
    };

    constructor(product: ProductData) {
        this.product = product;
    }

    getTaxRates(): number {
        const salesTax = this.#getTaxRateForYear(this.#SALES_TAX_RATES);
        const exciseTax = this.#getTaxRateForYear(this.#EXCISE_TAX_RATES);
        return salesTax + exciseTax;
    }

    #getTaxRateForYear(taxRates: { [key: number]: number }): number {
        const year = this.product?.year ? parseInt(this.product.year) : 0;

        const startYears = Object.keys(taxRates).map(Number).sort((a, b) => b - a);
        const applicableStartYear = startYears.find(startYear => year >= startYear);
        return applicableStartYear !== undefined ? taxRates[applicableStartYear] : 0;
    }
}