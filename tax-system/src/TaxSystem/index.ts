import { Product } from "../Product";
import { TaxStates } from "../TaxStates";
import { ProductData } from "../types/product";

export class TaxSystem {
    product: ProductData | null = null

    initSystem() {
        const product = new Product();
        product.createProduct({ year: '2015', fiscalState: 'california', baseValue: 1000, productId: '5040' })
        product.updateTotalValue(1200)

        const newProductData = product.getProduct();
        console.log("new product data", newProductData);

        const taxStates = new TaxStates();
        taxStates.getTaxRates(newProductData)
        // const taxRateCalifornia = taxStates.getTaxRates(newProductData);
        // console.log("Tax Rates California", taxRateCalifornia);

    }
}