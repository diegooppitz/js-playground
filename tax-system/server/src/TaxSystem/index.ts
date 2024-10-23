import { Product } from "../Product";
import { federalTaxRate } from "../mock";
import { ProductData, TaxInfo } from "src/types";
import { TaxStates } from "../TaxStates";

export class TaxSystem {
    result?: TaxInfo;

    initSystem(productDataOverrides?: Partial<ProductData> | null) {
        const product = new Product(productDataOverrides)
        const productTaxStates = new TaxStates(product.productData, federalTaxRate);

        if (productTaxStates.taxInfo.error) {
            console.log("product -", productTaxStates.taxInfo);
            this.result = productTaxStates.taxInfo;
        }
        else if (productTaxStates.taxInfo.taxRates) {
            console.log("Product - Tax Rates:", productTaxStates.taxInfo.taxRates);
            this.result = productTaxStates.taxInfo;
        }
    }
}