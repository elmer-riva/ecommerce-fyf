<script>
export default {
  name: "item.component.vue"
}
</script>

<template>
  <main class="mt-24">
    <pv-card style="width: 15rem; overflow: hidden" class ="border border-transparent rounded-2xl bg-white">
      <template #header>
        <img alt="user header" src="../../assets/img/apple.jpg" />
      </template>
      <template #title>
        <p style="font-size: 30px; font-weight: 500">Apple</p>
      </template>
      <template #subtitle>
        <a class="text-center overflow-hidden overflow-ellipsis"> Description</a>
      </template>
      <template #content>
        <p class="m-0 text-left font-bold">
          Price
        </p>
      </template>
      <template #footer>
        <div class="flex justify-center gap-4 mt-1 items-center">
          <pv-button label="Add To Cart" severity="secondary" outlined class="w-36 bg-[#059669] text-white rounded-lg text-lg px-1 py-2"/>
        </div>
      </template>
    </pv-card>
  </main>
</template>

<style scoped>

</style>