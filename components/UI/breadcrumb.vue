<template>
      <container class="mt-20">
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">
          <h1 class="text-tblack font-semibold text-xl md:text-2xl lg:text-4xl">
            {{title}}
          </h1>
          <p class="text-muted text-lg">
            <nuxt-link to="/" title="Home" class="hover:text-orange-500">Home</nuxt-link>
           - {{subtitle}}
        </p>
        </div>
      </div>
    </container>
</template>

<script setup>
import container from './container.vue';
const props = defineProps({
    title:String,
    subtitle:String
})

</script>

<style scoped>

</style>