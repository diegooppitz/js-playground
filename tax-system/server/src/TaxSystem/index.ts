import { Product } from "../Product";
import { federalTaxRate } from "../mock";
import { ProductData, TaxInfo } from "src/types";
import { TaxStates } from "../TaxStates";

export class TaxSystem {
    listStates?: any;
    taxInfo?: TaxInfo;
    product?: Product;

    calcTotalTax() {
        const taxRates = this.taxInfo?.taxRates;
        const totalTaxRate = taxRates?.totalTaxRate;
    
        const baseValue = this.product?.productData.baseValue || 0;
        const taxMultiplier = totalTaxRate ? 1 + totalTaxRate / 100 : 1;
        const totalValue = baseValue * taxMultiplier;
    
        return parseFloat(totalValue.toFixed(2));
    }

    initSystem(productDataOverrides?: Partial<ProductData> | null) {
        this.product = new Product(productDataOverrides);

        const statesInfo = new TaxStates(this.product.productData, federalTaxRate);
        this.listStates = statesInfo.listStates;
        this.taxInfo = statesInfo.taxInfo;

        if (this.taxInfo.error) return;

        this.product.productData.totalValue = this.calcTotalTax();
    }
}
