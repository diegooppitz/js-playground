import { ProductData } from "@/types";
import { usStates } from "../mock";

export class Product {
    productData: ProductData

    constructor(productDataOverrides?: Partial<ProductData> | null) {
        this.productData = { productId: '', year: '', fiscalState: '', baseValue: 0, totalValue: 0 }
        this.#generateProductData(productDataOverrides)
    }


    #generateProductData = (productDataOverrides?: Partial<ProductData> | null) => {
        const defaultProductData = this.generateRandomProductData();

        const newProductData: ProductData = {
            productId: productDataOverrides?.productId ?? defaultProductData.productId,
            year: productDataOverrides?.year ?? defaultProductData.year,
            fiscalState: productDataOverrides?.fiscalState ?? defaultProductData.fiscalState,
            baseValue: productDataOverrides?.baseValue ?? defaultProductData.baseValue,
        };

        console.log("product data", newProductData)
        this.#createProduct({ ...newProductData })
    }

    #generateRandomProductId = () => Math.random().toString(36).substring(2, 11);

    #generateRandomYear = () => {
        const START_YEAR = 2010;
        const CURRENT_YEAR = new Date().getFullYear();

        return Math.floor(Math.random() * (CURRENT_YEAR - START_YEAR + 1)) + START_YEAR;
    }

    #generateRandomBaseValue = () => {
        const MAX_BASE_VALUE = 10000;
        return Math.floor(Math.random() * MAX_BASE_VALUE);
    }

    generateRandomProductData = (): ProductData => ({
        productId: this.#generateRandomProductId(),
        year: this.#generateRandomYear().toString(),
        fiscalState: usStates[Math.floor(Math.random() * usStates.length)],
        baseValue: this.#generateRandomBaseValue(),
    });

    updateTotalValue(totalValue: number) {
        this.#setNewTotalValue(totalValue)
    }

    #createProduct({ productId, year, fiscalState, baseValue }: ProductData) {
        if (year && fiscalState && baseValue) {
            this.productData = {
                productId,
                year,
                fiscalState,
                baseValue,
                totalValue: 0
            };
        }
    }

    #setNewTotalValue(totalValue: number) {
        if (totalValue) this.productData.totalValue = totalValue;
    }
}