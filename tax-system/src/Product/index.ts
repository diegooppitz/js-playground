import { ProductData, NewProductData } from "../types/product"; 

export class Product {
    productData: ProductData = {
        year: '',
        fiscalState: '',
        baseValue: 0,
        totalValue: 0
    }

    createProduct(newProductData: NewProductData) {
        this.#setProductData(newProductData);
    }

    updateTotalValue(totalValue: number){
        this.#setNewTotalValue(totalValue)
    }

    getProduct() {
        return this.#returnProduct();
    }

    #setProductData({ year, fiscalState, baseValue }: NewProductData) {
        if(year && fiscalState && baseValue) {
            this.productData = {
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