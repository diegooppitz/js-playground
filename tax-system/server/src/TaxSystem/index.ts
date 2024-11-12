import { Product } from "../Product";
import { federalTaxRate } from "../mock";
import { ProductData } from "src/types";
import { TaxStates } from "../TaxStates";

export class TaxSystem {
  statesInfo?: TaxStates;
  product?: Product;

  initSystem() {
    this.statesInfo = new TaxStates(federalTaxRate);
  }

  getProductTaxes(productDataOverrides?: Partial<ProductData> | null) {
    this.#calcProductTaxes(productDataOverrides);
  }

  #calcTotalProductValue() {
    const taxRates = this.statesInfo?.taxInfo?.taxRates;
    const totalTaxRate = taxRates?.totalTaxRate;

    const baseValue = this.product?.productData.baseValue || 0;
    const taxMultiplier = totalTaxRate ? 1 + totalTaxRate / 100 : 1;
    const totalValue = baseValue * taxMultiplier;

    return parseFloat(totalValue.toFixed(2));
  }

  #calcProductTaxes(productDataOverrides?: Partial<ProductData> | null) {
    this.product = new Product(productDataOverrides);

    if (this.statesInfo) {
      this.statesInfo.getTaxRates(this.product.productData);
      this.statesInfo.taxInfo = this.statesInfo?.taxInfo;
    }

    if (this.statesInfo?.taxInfo?.error) return;

    this.product.productData.totalValue = this.#calcTotalProductValue();
  }
}
