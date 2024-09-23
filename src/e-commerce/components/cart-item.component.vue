<template>
  <pv-card class="cart-item pv-card">
    <template #header>
      <img :src="imageSrc" alt="product image" class="cart-item-img" />
    </template>
    <template #title>
      <h4>{{ product.name }}</h4>
    </template>
    <template #content>
      <p>Price: ${{ product.price }}</p>
      <p>Quantity: {{ quantity }}</p>
    </template>
    <template #footer>
      <button @click="removeFromCart" class="remove-button">Remove</button>
    </template>
  </pv-card>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  computed: {
    imageSrc() {
      return `/img/imagen${this.product.product_id}.webp`; // Cambia la ruta según tus imágenes
    }
  },
  methods: {
    removeFromCart() {
      this.$emit('remove', this.product.product_id);
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
}

.cart-item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.remove-button:hover {
  background-color: darkred;
}
</style>
