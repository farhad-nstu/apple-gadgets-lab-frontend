<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }} - {{ product.initial_stock_quantity }}
          <button @click="deleteProduct(product.id)">Delete</button>
        </li>
      </ul>
      <router-link to="/product/new">Add Product</router-link>
    </div>
  </template>
  
  <script>
  import ProductService from '@/services/ProductService';
  
  export default {
    data() {
      return {
        products: []
      };
    },
    methods: {
      fetchProducts() {
        ProductService.getAll().then(response => {
          this.products = response.data;
        });
      },
      deleteProduct(id) {
        ProductService.delete(id).then(() => {
          this.fetchProducts();
        });
      }
    },
    created() {
      this.fetchProducts();
    }
  };
  </script>
  