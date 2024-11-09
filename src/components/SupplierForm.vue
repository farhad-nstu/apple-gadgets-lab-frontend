<template>
    <div>
      <h2>Add or Edit Supplier</h2>
      <form @submit.prevent="submitForm">
        <input v-model="supplier.name" placeholder="Supplier Name" />
        <input v-model="supplier.contact" placeholder="Supplier Contact" />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  import SupplierService from '@/services/SupplierService';
  
  export default {
    data() {
      return {
        supplier: {
          name: '',
          contact: ''
        }
      };
    },
    methods: {
      submitForm() {
        if (this.supplier.id) {
          SupplierService.update(this.supplier.id, this.supplier).then(() => {
            this.$router.push('/suppliers');
          });
        } else {
          SupplierService.create(this.supplier).then(() => {
            this.$router.push('/suppliers');
          });
        }
      }
    },
    created() {
      const supplierId = this.$route.params.id;
      if (supplierId) {
        SupplierService.get(supplierId).then(response => {
          this.supplier = response.data;
        });
      }
    }
  };
  </script>
  