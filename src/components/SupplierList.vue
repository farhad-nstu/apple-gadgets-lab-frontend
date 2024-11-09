<template>
    <div>
      <h2>Supplier List</h2>
      <ul>
        <li v-for="supplier in suppliers" :key="supplier.id">
          {{ supplier.name }} - {{ supplier.contact_info }} - {{ supplier.address }}
          <button @click="deleteSupplier(supplier.id)">Delete</button>
        </li>
      </ul>
      <router-link to="/supplier/new">Add Supplier</router-link>
    </div>
  </template>
  
  <script>
  import SupplierService from '@/services/SupplierService';
  
  export default {
    data() {
      return {
        suppliers: []
      };
    },
    methods: {
      fetchSuppliers() {
        SupplierService.getAll().then(response => {
          this.suppliers = response.data.data.data;
        });
      },
      deleteSupplier(id) {
        SupplierService.delete(id).then(() => {
          this.fetchSuppliers();
        });
      }
    },
    created() {
      this.fetchSuppliers();
    }
  };
  </script>
  