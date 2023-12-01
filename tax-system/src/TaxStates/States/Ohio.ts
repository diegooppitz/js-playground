import { IConcreteTaxRates, IConcreteTaxState } from "@/interfaces";
import { ProductData, TaxRateMethod, TaxRateMethodName } from "@/types";

export class Ohio implements IConcreteTaxState {
    product: ProductData;
    taxRates: IConcreteTaxRates;

    constructor(product: ProductData, federalTaxRate: number) {
        console.log("federal", federalTaxRate)
        this.product = product;
        this.taxRates = { sales: 0, excise: 0, federal: federalTaxRate, total: 0 };
        this.calcTaxRateForYear();
    }

    calcTaxRateForYear() {
        const year = parseInt(this.product.year);
        const methodName: TaxRateMethodName = `year${year}` as TaxRateMethodName;

        const possibleMethod = this[methodName as keyof this];
        if (typeof possibleMethod === 'function') (possibleMethod as TaxRateMethod).call(this);
        else this.taxRates.total = null;
    }

    calculateTotalTax() {
        this.taxRates.total = this.taxRates.sales + this.taxRates.excise + this.taxRates.federal;
    }

    getTaxState() {
        return this.taxRates.total ? this.taxRates : "Unregistred year";
    }

    private year2012() {
        this.taxRates.sales = 5;
        this.taxRates.excise = 15;
        this.calculateTotalTax();
    }

    private year2015() {
        this.taxRates.sales = 5;
        this.taxRates.excise = 15;
        this.calculateTotalTax();
    }

    private year2018() {
        this.taxRates.sales = 6;
        this.taxRates.excise = 10;
        this.calculateTotalTax();
    }

    private year2020() {
        this.taxRates.sales = 8;
        this.taxRates.excise = 11;
        this.calculateTotalTax();
    }
}