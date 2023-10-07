<template>
      <div class="flex flex-col justify-center items-start text-white">
        <span>{{ props.title1 }}</span>
        <h3 class="text-2xl md:text-3xl lg:4xl xl:text-5xl font-semibold">
          {{ props.title2 }}
        </h3>
        <span class="text-muted text-lg line-through mt-5"
          >${{ props.price }}</span
        >
        <span class="text-xl md:text-2xl lg:3xl xl:text-4xl font-semibold"
          >${{ props.reducedPrice }}</span
        >
        <button
          class="bg-tblack text-white px-12 py-3 mt-5 rounded-md text-lg hover:bg-white hover:text-black delay-75"
        >
          Shop Now
        </button>
      </div>

      <div class="flex flex-col items-end relative">
        <img :src="props.img" alt="" class="w-2/3 h-auto z-10 relative" />
        <img
          src="/product-banners/discount.png"
          alt=""
          class="absolute top-10 right-1/2 z-20"
        />
      </div>
</template>

<script setup>
const props = defineProps({
    title1:String,
    title2:String,
    reducedPrice:Number,
    price:Number,
    img:String,
    productID:String,
})
</script>

<style  scoped>

</style>