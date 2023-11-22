import { Product } from "./Product/Product";

const product = new Product();
product.createProduct({ year: '2023', fiscalState: "SP", baseValue: 100 });
product.updateTotalValue(5000);
console.log(product.getProduct());


