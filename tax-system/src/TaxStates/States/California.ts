import { ProductData } from "../../types/product";

export class California {
    product: ProductData;
    taxRates: number | string;

    constructor(product: ProductData) {
        this.product = product;
        this.taxRates = 'Undefined year'
        this.calcTaxRateForYear();
    }

    calcTaxRateForYear() {
        const year = parseInt(this.product.year);
        const methodName = `year${year}`;

        const possibleMethod = this[methodName as keyof California];
        if (typeof possibleMethod === 'function') {
            possibleMethod.call(this);
        }
    }

    year2015() {
       this.taxRates = 20;
    }

    year2016() {
        this.taxRates = 30;
    }

    year2017() {
        this.taxRates = 40;
    }
}