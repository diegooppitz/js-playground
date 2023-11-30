import { ProductData } from "@/types"; 

export class Product {
    productData: ProductData = {
        productId: '',
        year: '',
        fiscalState: '',
        baseValue: 0,
        totalValue: 0
    }

    createProduct(newProductData: ProductData) {
        this.#setProductData(newProductData);
    }

    updateTotalValue(totalValue: number){
        this.#setNewTotalValue(totalValue)
    }

    getProduct() {
        return this.#returnProduct();
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

    #setNewTotalValue(totalValue: number) {
        if(totalValue) this.productData.totalValue = totalValue;
    }

    #returnProduct() {
        return this.productData;
    }
}