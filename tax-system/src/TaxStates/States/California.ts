import { ProductData } from "../../types/product";

type TaxRateMethod = () => void;
type TaxRateMethodName = `year${number}`;

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
        const methodName: TaxRateMethodName = `year${year}` as TaxRateMethodName;

        const possibleMethod = this[methodName as keyof this];
        if (typeof possibleMethod === 'function') (possibleMethod as TaxRateMethod).call(this);
    }

    private year2015() {
        this.taxRates = 20;
    }

    private year2016() {
        this.taxRates = 30;
    }

    private year2017() {
        this.taxRates = 40;
    }
}