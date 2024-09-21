<script>
export default {
  name: "navbar.component.vue"
}

//bg-[#ff5733]
</script>
<template>
  <div>

    <pv-toolbar class="w-full bg-[#1e293b] shadow-md fixed top-0 left-0 flex items-center justify-between p-4">

      <template #start>
        <p class="text-lg text-white font-bold">Flora Y Fauna</p>
      </template>

      <template #end>
        <div class="flex items-center space-x-4">
          <pv-button class="bg-[#1e293b] text-white">
            <i class="pi pi-shopping-cart mx-3"></i>
            <a class="text-white">Cart</a>
          </pv-button>

          <pv-button class="bg-[#1e293b] text-white">
            <i class="pi pi-sign-in mx-3"></i>
            <a class="text-white mr-5">Log In</a>
          </pv-button>

          <pv-button class="bg-[#059669] text-white rounded-lg text-lg px-6 py-3">
            Register Now
          </pv-button>
        </div>
      </template>
    </pv-toolbar>

  </div>
</template>


<style scoped>

</style>
