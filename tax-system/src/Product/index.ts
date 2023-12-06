import { ProductData } from "@/types"; 

export class Product {
    productData: ProductData = {
        productId: '',
        year: '',
        fiscalState: '',
        baseValue: 0,
        totalValue: 0
    }

    constructor(newProductData: ProductData, newBaseValue: number) {
        this.#createProduct(newProductData, newBaseValue)
    }

    updateTotalValue(totalValue: number){
        this.#setNewTotalValue(totalValue)
    }

    getProduct() {
        return this.#returnProduct();
    }

    #createProduct(newProductData: ProductData, newBaseValue: number) {
        this.#setProductData(newProductData);
        this.#setNewBaseValue(newBaseValue)
    }

    #setProductData({ productId, year, fiscalState, baseValue }: ProductData) {
        if(year && fiscalState && baseValue) {
            this.productData = {
                productId,
                year,
                fiscalState,
                baseValue,
                totalValue: 0
            };
        }
    }

    #setNewBaseValue(newBaseValue: number) {
        if(newBaseValue) this.productData.baseValue = newBaseValue;
    }

    #setNewTotalValue(totalValue: number) {
        if(totalValue) this.productData.totalValue = totalValue;
    }

    #returnProduct() {
        return this.productData;
    }
}