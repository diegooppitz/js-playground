import { Product } from '../src/Product';

describe('Product', () => {
  const initialProductData = {
    productId: '123',
    year: '2023',
    fiscalState: 'california',
    baseValue: 100
  };

    it('should correctly initialize product data', () => {
      const product = new Product(initialProductData, 100);
      expect(product.getProduct()).toEqual({
        ...initialProductData,
        totalValue: 0
      });
    });

    it('should update the total value of the product', () => {
      const product = new Product(initialProductData, 100);
      product.updateTotalValue(200);
      expect(product.getProduct().totalValue).toBe(200);
    });

    it('should return the correct product data', () => {
      const product = new Product(initialProductData, 100);
      expect(product.getProduct()).toEqual({
        ...initialProductData,
        totalValue: 0
      });
    });
});