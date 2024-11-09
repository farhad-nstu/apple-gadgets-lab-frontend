<template>
    <div>
      <h2>Add or Edit Product</h2>
      <form @submit.prevent="submitForm">
        <input v-model="product.name" placeholder="Product Name" />
        <input v-model="product.price" placeholder="Product Price" />
        <input v-model="product.initial_stock_quantity" placeholder="Initial Stock" />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import ProductService from '@/services/ProductService';
  
  export default {
    data() {
      return {
        product: {
          name: '',
          price: '',
          initial_stock_quantity: ''
        }
      };
    },
    methods: {
      submitForm() {
        if (this.product.id) {
          ProductService.update(this.product.id, this.product).then(() => {
            this.$router.push('/');
          });
        } else {
          ProductService.create(this.product).then(() => {
            this.$router.push('/');
          });
        }
      }
    },
    created() {
      const productId = this.$route.params.id;
      if (productId) {
        ProductService.get(productId).then(response => {
          this.product = response.data;
        });
      }
    }
  };
  </script>
  