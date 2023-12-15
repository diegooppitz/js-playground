import { ProductData } from "@/types"; 

export class Product {
    productData: ProductData

    constructor(newProductData: ProductData) {
        this.productData = { productId: '', year: '', fiscalState: '', baseValue: 0, totalValue: 0 }
        this.#createProduct(newProductData)
    }

    updateTotalValue(totalValue: number){
        this.#setNewTotalValue(totalValue)
    }

    #createProduct({ productId, year, fiscalState, baseValue }: ProductData) {
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

    #setNewTotalValue(totalValue: number) {
        if(totalValue) this.productData.totalValue = totalValue;
    }
}