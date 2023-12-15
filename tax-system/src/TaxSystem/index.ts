import { generateProductData } from "../util/generateProductData"
import { federalTaxRate } from "../mock";
import { ProductData, TaxInfo } from "@/types";

export class TaxSystem {
    result?: TaxInfo;

    initSystem(productDataOverrides?: Partial<ProductData> | null) {
        // product 1
        const productTaxStates = generateProductData(federalTaxRate, productDataOverrides)

        if (productTaxStates.taxInfo.error) {
            console.log("product1 -", productTaxStates.taxInfo);
            this.result = productTaxStates.taxInfo;
        }
        else if (productTaxStates.taxInfo.taxRates) {
            console.log("Product1 - Tax Rates:", productTaxStates.taxInfo.taxRates);
            this.result = productTaxStates.taxInfo;
        }
        
        // product 2
        const productTaxStates2 = generateProductData(federalTaxRate)

        if (productTaxStates2.taxInfo.error) console.log("product2 -", productTaxStates2.taxInfo.error);
        else if (productTaxStates2.taxInfo.taxRates) console.log("Product 2 - Tax Rates:", productTaxStates2.taxInfo.taxRates);

        // product 3
        const productTaxStates3 = generateProductData(federalTaxRate)

        if (productTaxStates3.taxInfo.error) console.log("product3 -", productTaxStates3.taxInfo.error);
        else if (productTaxStates3.taxInfo.taxRates) console.log("Product 3 - Tax Rates:", productTaxStates3.taxInfo.taxRates);
    }
}