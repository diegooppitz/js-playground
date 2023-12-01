import { Product } from "../Product";
import { TaxStates } from "../TaxStates";
import { ProductData } from "@/types";

export class TaxSystem {
    product: ProductData | null = null

    initSystem() {
        const californiaValidYear = { year: '2010', fiscalState: 'california', baseValue: 1000, productId: '5040' }
        const ohioValidYear = { year: '2018', fiscalState: 'ohio', baseValue: 1000, productId: '5041' }
        const ohioInvalidYear = { year: '2015', fiscalState: 'ohio', baseValue: 1000, productId: '5042' }
        const invalidState = { year: '2015', fiscalState: 'californiaa', baseValue: 1000, productId: '5043' }

         // product 1
        const product = new Product();
        product.createProduct(californiaValidYear)
        product.updateTotalValue(1200)
        const newProductData = product.getProduct();

        const taxStates = new TaxStates(newProductData);
        const taxRates = taxStates.taxRates
        console.log("Tax Rates", taxRates);

        // product 2
        const product2 = new Product();
        product2.createProduct(ohioValidYear)
        product2.updateTotalValue(1200)
        const newProductData2 = product2.getProduct();

        const taxStates2 = new TaxStates(newProductData2);
        const taxRates2 = taxStates2.taxRates
        console.log("Tax Rates 2", taxRates2);
    }
}