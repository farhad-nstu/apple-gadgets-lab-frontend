<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }} - {{ product.initial_stock_quantity }}
          <button @click="deleteProduct(product.id)">Delete</button>
          <router-link :to="{ name: 'editProduct', params: { id: product.id } }">
            <button>Edit</button>
          </router-link>
        </li>
      </ul>
      <router-link to="/product/new">Add Product</router-link><br>
      <router-link to="/supplier/new">Add Supplier</router-link><br>
      <router-link to="/purchase/new-order">Purchase Order</router-link>
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
          console.log(response.data);
          this.products = response.data.data.data;
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
  