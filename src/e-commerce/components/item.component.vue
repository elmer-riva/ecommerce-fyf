<script>
export default {
  name: "item-component",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc() {
      // Ruta estática desde la carpeta public
      return `/img/imagen${this.product.product_id}.webp`;
    }
  }
};
</script>

<template>
  <main class="mt-24 rounded-2xl">
    <pv-card style="overflow: hidden" class="border border-transparent rounded-2xl bg-white product-card">
      <template #header>
        <!-- Cargar imagen de manera dinámica desde la carpeta public -->
        <img alt="Imagen del producto" :src="imageSrc"/>
      </template>
      <template #title>
        <p style="font-size: 30px; font-weight: 500">{{ product.name }}</p>
      </template>
      <template #subtitle>
        <a class="text-center overflow-hidden overflow-ellipsis">{{ product.short_description }}</a>
      </template>
      <template #content>
        <p class="font-bold">S/. {{ product.price }}</p>
      </template>
      <template #footer>
        <div class="flex justify-center gap-4 mt-1 items-center">
          <pv-button label="Add To Cart" severity="secondary" outlined
                     class="w-36 bg-[#059669] text-white rounded-lg text-lg px-1 py-2"/>
        </div>
      </template>
    </pv-card>
  </main>
</template>

<style scoped>

  main:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    border: 2px solid #181c1b;
  }
  .product-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
</style>
