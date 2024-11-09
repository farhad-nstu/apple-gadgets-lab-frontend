<template>
    <div>
      <h2>{{ product.id ? 'Edit Product' : 'Add Product' }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="product.name" placeholder="Product Name" />
        <input v-model="product.price" placeholder="Product Price" />
        <input v-model="product.initial_stock_quantity" placeholder="Initial Stock" />
        <select v-model="product.category_id">
          <option value="1">Watch</option>
          <option value="2">Cloth</option>
        </select>
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
          initial_stock_quantity: '',
          category_id: '1' // default category ID
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Submitting product:', this.product);
  
        if (this.product.id) {
          ProductService.update(this.product.id, this.product)
            .then(() => {
              this.$router.push('/');
            })
            .catch(error => {
              console.error('Error updating product:', error.response);
            });
        } else {
          ProductService.create(this.product)
            .then(() => {
              this.$router.push('/');
            })
            .catch(error => {
              console.error('Error creating product:', error.response);
            });
        }
      }
    },
    created() {
      const productId = this.$route.params.id;
      if (productId) {
        ProductService.get(productId)
          .then(response => {
            // Ensure you have the correct data structure
            const fetchedProduct = response.data.data;
            if (fetchedProduct) {
              Object.assign(this.product, fetchedProduct); // Update product properties reactively
              console.log('Loaded product:', this.product);
            }
          })
          .catch(error => {
            console.error('Error loading product:', error.response);
          });
      }
    }
  };
  </script>
  