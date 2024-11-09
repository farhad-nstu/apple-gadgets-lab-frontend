import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import ProductForm from '@/components/ProductForm.vue';
import SupplierList from '@/components/SupplierList.vue';
import SupplierForm from '@/components/SupplierForm.vue';
import PurchaseForm from '@/components/PurchaseForm.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/product/new', component: ProductForm },
  { path: '/product/edit/:id', component: ProductForm, name: 'editProduct' },
  { path: '/suppliers', component: SupplierList },
  { path: '/supplier/new', component: SupplierForm },
  { path: '/supplier/edit/:id', component: SupplierForm },
  { path: '/purchase/new-order', component: PurchaseForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
