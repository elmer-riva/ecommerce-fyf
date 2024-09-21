<script>
import itemComponent from "./item.component.vue";

export default {
  name: "itemlist.component.vue",
  components: {
    itemComponent
  },
  data(){
    return {
      itemCount: 10 // num cards
    };
  }


}
</script>
<template>
  <div class="grid grid-cols-4 gap-4 justify-items-center">
    <itemComponent v-for="index in itemCount" :key="index" :data="{ id: index, name: `Item ${index}` }"></itemComponent>
  </div>
</template>

<style scoped>

</style>