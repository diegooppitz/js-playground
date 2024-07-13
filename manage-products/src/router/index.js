import { createRouter, createWebHistory } from 'vue-router';
import NewProduct from '../views/new-product';
import ProductView from '../views/product-view';
import Products from '../views/products';

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products,
  },
  {
    path: '/view/:id',
    name: 'ViewProduct',
    component: ProductView,
  },
  {
    path: '/create',
    name: 'NewProduct',
    component: NewProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
