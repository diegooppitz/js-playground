import { Product } from "../Product";
import { federalTaxRate } from "../mock";
import { ProductData, TaxInfo } from "src/types";
import { TaxStates } from "../TaxStates";

export class TaxSystem {
    taxInfo?: TaxInfo;
    product?: Product;

    calcTotalTax(productTaxStates: TaxStates) {
        const taxRates = productTaxStates?.taxInfo?.taxRates;
        const totalTaxRate = taxRates?.totalTaxRate;
    
        const baseValue = this.product?.productData.baseValue || 0;
        const taxMultiplier = totalTaxRate ? 1 + totalTaxRate / 100 : 1;
        const totalValue = baseValue * taxMultiplier;
    
        console.log("product - tax rates:", taxRates);
        console.log("base value:", baseValue);
    
        return parseFloat(totalValue.toFixed(2));
    }

    initSystem(productDataOverrides?: Partial<ProductData> | null) {
        this.product = new Product(productDataOverrides);

        const productTaxStates = new TaxStates(this.product.productData, federalTaxRate);
        this.taxInfo = productTaxStates.taxInfo;

        if (productTaxStates.taxInfo.error) return;

        this.product.productData.totalValue = this.calcTotalTax(productTaxStates);
        console.log("product data updated:", this.product.productData);
    }
}
