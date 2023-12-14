import { Product } from "../Product";
import { TaxStates } from "../TaxStates";
import { ProductData } from "@/types";
import { usStates } from "../mock";

const START_YEAR = 2010;
const CURRENT_YEAR = new Date().getFullYear();
const MAX_BASE_VALUE = 10000;

const generateRandomYear = () => Math.floor(Math.random() * (CURRENT_YEAR - START_YEAR + 1)) + START_YEAR;
const generateRandomProductId = () => Math.random().toString(36).substring(2, 11);
const generateRandomBaseValue = () => Math.floor(Math.random() * MAX_BASE_VALUE);

const generateRandomProductData = (): ProductData => ({
    productId: generateRandomProductId(),
    year: generateRandomYear().toString(),
    fiscalState: usStates[Math.floor(Math.random() * usStates.length)],
    baseValue: generateRandomBaseValue(),
});

export const generateProductData = (federalTaxRate: number) => {
    const newProductData = generateRandomProductData();
    const product = new Product(newProductData);
    const productData = product.productData;

    return new TaxStates(productData, federalTaxRate);
}