import { IConcreteTaxState } from "@/interfaces";
import { ProductData, TaxRateMethod, TaxRateMethodName } from "@/types";


export class California implements IConcreteTaxState {
    taxRates
    product
    errorMsg

    constructor(product: ProductData, federalTaxRate: number) {    
        this.product = product;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: federalTaxRate, totalTaxRate: 0 };
        this.errorMsg = ''
        this.#calcTaxRateForYear();
    }

    getTaxRates() {
        return this.errorMsg ? this.errorMsg : this.taxRates;
    }

    #calcTaxRateForYear() {
        const year = parseInt(this.product.year);
        const methodName: TaxRateMethodName = `year${year}` as TaxRateMethodName;

        const possibleMethod = this[methodName as keyof this];
        if (typeof possibleMethod === 'function')(possibleMethod as TaxRateMethod).call(this);
        else this.errorMsg = "Error: Unregistred year"
    }

    #calculateTotalTax() {
        this.taxRates.totalTaxRate = this.taxRates.salesTax + this.taxRates.exciseTax + this.taxRates.federalTax;
        if (!this.taxRates.totalTaxRate) this.errorMsg =  "Error: Calculate year tax rates error";
    }

    private year2010() {
        this.taxRates.exciseTax = 15;
        this.taxRates.salesTax = 5;
        this.#calculateTotalTax();
    }

    private year2011() {
        this.taxRates.salesTax = 5;
        this.taxRates.exciseTax = 15;
        this.#calculateTotalTax();
    }

    private year2014() {
        this.taxRates.salesTax = 6;
        this.taxRates.exciseTax = 10;
        this.#calculateTotalTax();
    }

    private year2017() {
        this.taxRates.salesTax = 8;
        this.taxRates.exciseTax = 11;
        this.#calculateTotalTax();
    }
}