<template>
  <div
    class="flex flex-col justify-center items-start text-white"
    :class="{ 'text-focus-in': props.isVisible }"
  >
    <span>{{ props.title1 }}</span>
    <h3 class="text-2xl md:text-3xl lg:4xl xl:text-5xl font-semibold">
      {{ props.title2 }}
    </h3>
    <span class="text-muted text-lg line-through mt-5">${{ props.price }}</span>
    <span class="text-xl md:text-2xl lg:3xl xl:text-4xl font-semibold"
      >${{ props.reducedPrice }}</span
    >
    <button
      class="bg-tblack text-white px-6 py-2 md:px-12 md:py-3 mt-3 md:mt-5 rounded-md text-lg hover:bg-white hover:text-black delay-75"
    >
      Shop Now
    </button>
  </div>

  <div
    class="flex flex-col items-end relative"
    :class="{ 'text-focus-in': props.isVisible }"
  >
    <img :src="props.img" alt="" class="w-2/4 md:w-2/3 h-auto z-10 relative" />
    <img
      src="/product-banners/discount.png"
      alt=""
      class="absolute top-10 right-1/2 z-20"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title1: String,
  title2: String,
  reducedPrice: String,
  price: String,
  img: String,
  productID: String,
  isVisible: Boolean,
});
</script>

<style scoped>


.text-focus-in{-webkit-animation:text-focus-in 0.9s cubic-bezier(.55,.085,.68,.53) both;animation:text-focus-in 0.9s cubic-bezier(.55,.085,.68,.53) both}


 @-webkit-keyframes text-focus-in{0%{-webkit-filter:blur(8px);filter:blur(8px);opacity:0}100%{-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes text-focus-in{0%{-webkit-filter:blur(8px);filter:blur(8px);opacity:0}100%{-webkit-filter:blur(0);filter:blur(0);opacity:1}}
</style>
