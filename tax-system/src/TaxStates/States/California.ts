import { IConcreteTaxRates, IConcreteTaxState } from "@/interfaces";
import { ProductData, TaxRateMethod, TaxRateMethodName, ErrorInfo } from "@/types";


export class California implements IConcreteTaxState {
    salesTax
    exciseTax
    totalTaxRate
    federalTax
    taxRates
    errorMsg: ErrorInfo | null
    product: ProductData;

    constructor(product: ProductData, federalTaxRate: number) {    
        this.salesTax = 0;
        this.exciseTax = 0;
        this.totalTaxRate = 0;
        this.federalTax = 0;
        this.product = product;
        this.taxRates = { salesTax: 0, exciseTax: 0, federalTax: federalTaxRate, totalTaxRate: 0 };
        this.errorMsg = null
        this.#calcTaxRateForYear();
    }

    getTaxRates(): ErrorInfo | IConcreteTaxRates {
        return this.errorMsg ? this.errorMsg : this.taxRates;
    }

    #calcTaxRateForYear() {
        const year = parseInt(this.product.year);
        const methodName: TaxRateMethodName = `year${year}` as TaxRateMethodName;

        const possibleMethod = this[methodName as keyof this];
        // if (typeof possibleMethod === 'function') (possibleMethod as TaxRateMethod).call(this);
        this.errorMsg = { error: "Unregistred year" };
        // else this.errorMsg = { error: "Unregistred year" };
    }

    #calculateTotalTax() {
        this.totalTaxRate = this.salesTax + this.exciseTax + this.federalTax;
        if (!this.totalTaxRate) this.errorMsg = { error: "Calculate year tax rates error"};
    }

    private year2010() {
        this.salesTax = 5;
        this.exciseTax = 15;
        this.#calculateTotalTax();
    }

    private year2011() {
        this.salesTax = 5;
        this.exciseTax = 15;
        this.#calculateTotalTax();
    }

    private year2014() {
        this.salesTax = 6;
        this.exciseTax = 10;
        this.#calculateTotalTax();
    }

    private year2017() {
        this.salesTax = 8;
        this.exciseTax = 11;
        this.#calculateTotalTax();
    }
}