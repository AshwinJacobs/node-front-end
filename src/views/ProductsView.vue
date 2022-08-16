<template>
  <input class="SB" type="text" v-model="search" placeholder="Search by Public/Private products" />
  <div class="row">
    <products
      v-for="product in filteredproducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import products from "../components/products.vue";
export default {
  components: { products },
  data() {
    return {
      search: "",
      products: [],
    };
  },
  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.Type?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style scoped>
.row {
  margin-top: 10px;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline:0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
</style>