<template>
    <div>
      <h2>Purchase New Order Item</h2>
      <form @submit.prevent="submitForm">
        <select v-model="purchase.supplier_id">
            <option value="">Select Supplier</option>
            <option value="1">Watch</option>
            <option value="2">Cloth</option>
        </select>
        <select v-model="purchase.product_id">
            <option value="">Select Product</option>
          <option value="1">Mr. X</option>
          <option value="2">Mr Y</option>
        </select>
        <input v-model="purchase.quantity" placeholder="Quantity" />
        <input v-model="purchase.unit_price" placeholder="Unit price" />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import PurchaseService from '@/services/PurchaseService';
  
  export default {
    data() {
      return {
        purchase: {
            supplier_id: '',
            product_id: '',
            quantity: '',
            unit_price: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Submitting purchase:', this.purchase);
  
        PurchaseService.create(this.purchase)
            .then(() => {
              this.$router.push('/');
            })
            .catch(error => {
              console.error('Error creating purchase:', error.response);
            });
        }
    },
  };
  </script>
  