import { Product } from "../Product";
import { TaxStates } from "../TaxStates";
import { ProductData } from "@/types"; 

export const generateProductData = (createProductData: ProductData, baseValue: number) => {
    const product = new Product(createProductData, baseValue);
    const newProductData = product.getProduct();
    return new TaxStates(newProductData);
}