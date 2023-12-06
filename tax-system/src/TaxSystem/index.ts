import { Product } from "../Product";
import { TaxStates } from "../TaxStates";

export class TaxSystem {
    initSystem() {
        const californiaValidYear = { year: '2010', fiscalState: 'california', baseValue: 1000, productId: '5040' }
        const ohioValidYear = { year: '2021', fiscalState: 'ohio', baseValue: 1000, productId: '5041' }
        const ohioInvalidYear = { year: '2015', fiscalState: 'ohio', baseValue: 1000, productId: '5042' }
        const invalidState = { year: '2015', fiscalState: 'californiaa', baseValue: 1000, productId: '5043' }
        const baseValue = 1200

         // product 1
        const product = new Product(californiaValidYear, baseValue);
        const newProductData = product.getProduct();
        const taxStates = new TaxStates(newProductData);

        if (taxStates.taxInfo.error) console.log("product1 -", taxStates.taxInfo.error);
        else if (taxStates.taxInfo.taxRates) console.log("Product1 - Tax Rates:", taxStates.taxInfo.taxRates);
        
        // product 2
        const product2 = new Product(ohioValidYear, baseValue);
        const newProductData2 = product2.getProduct();
        const taxStates2 = new TaxStates(newProductData2);

        if (taxStates2.taxInfo.error) console.log("product2 -", taxStates2.taxInfo.error);
        else if (taxStates2.taxInfo.taxRates) console.log("Product 2 - Tax Rates:", taxStates2.taxInfo.taxRates);

        // product 3 - invalid example
        const product3 = new Product(ohioInvalidYear, baseValue);
        const newProductData3 = product3.getProduct();
        const taxStates3 = new TaxStates(newProductData3);

        if (taxStates3.taxInfo.error) console.log("product3 -", taxStates3.taxInfo.error);
        else if (taxStates3.taxInfo.taxRates) console.log("Product 3 - Tax Rates:", taxStates3.taxInfo.taxRates);
    }
}