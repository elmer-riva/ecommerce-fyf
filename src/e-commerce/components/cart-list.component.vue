<template>
  <div class="cart-list">
    <cart-item
        v-for="(item, index) in cartItems"
        :key="index"
        :product="item.product"
        :quantity="item.quantity"
        @remove="removeFromCart"
    />
    <div class="subtotal">
      Subtotal: ${{ subtotal }}
    </div>
    <button @click="proceedToCheckout">Proceed to Checkout</button>
  </div>
</template>

<script>
import CartItem from "./cart-item.component.vue";
import { OrderItemsService } from "../services/order-items.service.js";
import { ProductsService } from "../services/products.service.js";

export default {
  name: 'CartList',
  components: { CartItem },
  data() {
    return {
      cartItems: [],
      orderItemsService: new OrderItemsService(),
      productsService: new ProductsService(),
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0);
    }
  },
  methods: {
    async fetchCartItems() {
      try {
        // Obtiene los order_items
        const orderItemsResponse = await this.orderItemsService.getOrderItems();
        const orderItems = orderItemsResponse.data;

        // Para cada order_item, obtiene el producto asociado
        const productPromises = orderItems.map(async (item) => {
          const productResponse = await this.productsService.getProductById(item.product_id);
          return {
            product: productResponse.data,  // Detalles del producto
            quantity: item.quantity          // Cantidad del order_item
          };
        });

        // Esperamos a que todas las promesas de productos se resuelvan
        this.cartItems = await Promise.all(productPromises);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        alert('Error fetching cart items. Please try again.');
      }
    },
    removeFromCart(productId) {
      console.log('Removing product:', productId);
      // Implementa la lógica para eliminar el producto del carrito
    },
    proceedToCheckout() {
      alert('Proceeding to checkout');
    }
  },
  created() {
    this.fetchCartItems();
  }
}
</script>

<style scoped>
.cart-list {
  padding-top: 60px;
  max-width: 600px;
  margin: auto;
}
.subtotal {
  font-weight: bold;
  margin-top: 20px;
}
button {
  background-color: #8A2BE2;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>
