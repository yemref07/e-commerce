<template>
  <swiper-container
    :free-mode=true
    space-between="30"
    :pagination= true
    :breakpoints="{
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 3,
      },
    }"
  >
    <swiper-slide class="py-10">
      <productDealCard
        cat="Mobile"
        title="Samsung Tablet 4 GB Ram"
        img="/product-demo-images/product-offer-1.webp"
        price=400
        productID=1
      />
    </swiper-slide>
    <swiper-slide class="py-10">
      <productDealCard
        cat="Consoles"
        title="Sony Play Station 5 1 TB"
        img="/product-demo-images/product-offer2.webp"
        price=1200
        productID=1
    /></swiper-slide>
    <swiper-slide class="py-10">
      <productDealCard
        cat="Camera"
        title="4K Digidal Video Camera"
        img="/product-demo-images/product-offer3.webp"
        price=400
        productID=1
    /></swiper-slide>
    <swiper-slide class="py-10">
      <productDealCard
        cat="Camera"
        title="4K Digidal Video Camera"
        img="/product-demo-images/product-offer3.webp"
        price=400
        productID=1
    /></swiper-slide>
    <swiper-slide class="py-10">
      <productDealCard
        cat="Camera"
        title="4K Digidal Video Camera"
        img="/product-demo-images/product-offer3.webp"
        price=400
        productID=1
    /></swiper-slide>
    <swiper-slide class="py-10">
      <productDealCard
        cat="Camera"
        title="4K Digidal Video Kamera"
        img="/product-demo-images/product-offer3.webp"
        price=400
    /></swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import productDealCard from "~/components/products/productDealCard.vue";
register();
</script>

<style scoped>
div > div.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
  background-color: red;
  color: red;
}
</style>
