<script>
import itemComponent from "./item.component.vue";
import {ProductsService} from "../services/products.service.js";
import {Product} from "../model/product.entity.js";

export default {
  name: "itemlist-component",
  components: {
    itemComponent
  },
  data(){
    return {
      itemCount: 10, // num cards
      products: [],
      productsService: new ProductsService()
    };
  },

  methods : {
    getProducts() {
      this.productsService.getProducts()
          .then(response => {
            const products = response.data;
            this.products = this.createProductListFromResponseData(products);
          })
    },
    createProductListFromResponseData(products) {
      return products.map(product => {
        const name = product.name;
        const price = product.price;
        const product_id = product.product_id;
        const short_description = product.short_description;
        return new Product(name, price, product_id, short_description);
      });
    }
  },
  mounted() {
    this.getProducts();
  }

}
</script>
<template>
  <div class="container">
    <item-component v-for="product in products" :product="product"></item-component>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
  justify-content: space-between;
  text-align: center;
  margin: 0 auto;
  align-items: center;
}
</style>