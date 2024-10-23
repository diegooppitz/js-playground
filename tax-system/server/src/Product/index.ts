import { ProductData } from "src/types";
import { usStates } from "../mock";

export class Product {
    productData: ProductData

    constructor(productDataOverrides?: Partial<ProductData> | null) {
        this.productData = { year: '', fiscalState: '', baseValue: 0, totalValue: 0 }
        this.#generateProductData(productDataOverrides)
    }

    generateRandomProductData = (): ProductData => ({
        year: this.#generateRandomYear().toString(),
        fiscalState: usStates[Math.floor(Math.random() * usStates.length)],
        baseValue: this.#generateRandomBaseValue(),
    });

    #generateProductData = (productDataOverrides?: Partial<ProductData> | null) => {
        const defaultProductData = this.generateRandomProductData();

        const newProductData: ProductData = {
            year: productDataOverrides?.year ?? defaultProductData.year,
            fiscalState: productDataOverrides?.fiscalState ?? defaultProductData.fiscalState,
            baseValue: productDataOverrides?.baseValue ?? defaultProductData.baseValue,
        };

        this.#createProduct({ ...newProductData })
    }

    #generateRandomYear = () => {
        const START_YEAR = 2010;
        const CURRENT_YEAR = new Date().getFullYear();

        return Math.floor(Math.random() * (CURRENT_YEAR - START_YEAR + 1)) + START_YEAR;
    }

    #generateRandomBaseValue = () => {
        const MAX_BASE_VALUE = 10000;
        return Math.floor(Math.random() * MAX_BASE_VALUE);
    }

    #createProduct({ year, fiscalState, baseValue }: ProductData) {
        if (year && fiscalState && baseValue) {
            this.productData = {
                year,
                fiscalState,
                baseValue,
                totalValue: 0
            };
        }
    }
}