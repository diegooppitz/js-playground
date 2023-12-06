import { generateProductData } from "../common"
import { californiaValidYear, ohioInvalidYear, ohioValidYear, baseValue } from "../mock";

export class TaxSystem {
    initSystem() {
         // product 1
        const productTaxStates = generateProductData(californiaValidYear, baseValue)

        if (productTaxStates.taxInfo.error) console.log("product1 -", productTaxStates.taxInfo.error);
        else if (productTaxStates.taxInfo.taxRates) console.log("Product1 - Tax Rates:", productTaxStates.taxInfo.taxRates);
        
        // product 2
        const productTaxStates2 = generateProductData(ohioValidYear, baseValue)

        if (productTaxStates2.taxInfo.error) console.log("product2 -", productTaxStates2.taxInfo.error);
        else if (productTaxStates2.taxInfo.taxRates) console.log("Product 2 - Tax Rates:", productTaxStates2.taxInfo.taxRates);

        // product 3 - invalid example
        const productTaxStates3 = generateProductData(ohioInvalidYear, baseValue)

        if (productTaxStates3.taxInfo.error) console.log("product3 -", productTaxStates3.taxInfo.error);
        else if (productTaxStates3.taxInfo.taxRates) console.log("Product 3 - Tax Rates:", productTaxStates3.taxInfo.taxRates);
    }
}