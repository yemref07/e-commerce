<template>
  <swiper-container
    slides-per-view="1"
    speed="500"
    pagination="true"
    :autoplay="{
      delay: 25000,
      disableOnInteraction: false,
    }"
    :navigation="{
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }"
  >
    <swiper-slide>
      <slideItem
        title1="The Best Electronic Devices"
        title2="Exclusive offer %10 off this week"
        catLink="/"
        bgColor="#115061"
        img="/slider/slider-img-1.png"
      />
    </swiper-slide>
    <swiper-slide>
      <slideItem
        title1="The Best Electronic Devices"
        title2="Exclusive offer %10 off this week"
        catLink="/"
        bgColor="#115061"
        img="/slider/slider-img-2.png"
      />
    </swiper-slide>
    <swiper-slide>
      <slideItem
        title1="The Best Electronic Devices"
        title2="Exclusive offer %10 off this week"
        catLink="/"
        bgColor="#115061"
        img="/slider/slider-img-3.png"
      />
    </swiper-slide>
  </swiper-container>

  <div class="container mx-auto px-10 lg:px-20 xl:px-32 mt-20">
    <div
      class="flex flex-row justify-center md:justify-between items-center flex-wrap gap-5"
    >
      <catCardCircle
        title="Headphones"
        link="/"
        product-stock="25"
        img="/produtc-cat-images/product-cat-1.png"
      />
      <catCardCircle
        title="Headphones"
        link="/"
        product-stock="25"
        img="/produtc-cat-images/product-cat-2.png"
      />
      <catCardCircle
        title="Headphones"
        link="/"
        product-stock="25"
        img="/produtc-cat-images/product-cat-3.png"
      />
      <catCardCircle
        title="Headphones"
        link="/"
        product-stock="25"
        img="/produtc-cat-images/product-cat-4.png"
      />
      <catCardCircle
        title="Headphones"
        link="/"
        product-stock="25"
        img="/produtc-cat-images/product-cat-5.png"
      />
    </div>
  </div>

  <div class="container mx-auto px-10 lg:px-20 xl:px-32 mt-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">

      <featureCard icon-size="42" title="Free Delivary" desc="Orders from all item" icon-name="ph:truck-light" /> 
      <featureCard icon-size="42" title="Return & Refund" desc="Monet back guarentee" icon-name="clarity:dollar-line" /> 
      <featureCard icon-size="42" title="Member Discount" desc="Onevery order over $140.00" icon-name="iconamoon:discount-light" /> 
      <featureCard icon-size="42" title="Support 24/7" desc="Contact us 24 hours a day" icon-name="bx:support" /> 
    </div>
  </div>
</template>

<script setup>
import catCardCircle from "~/components/UI/catCardCircle.vue";
import slideItem from "~/components/UI/slideItem.vue";
import featureCard from "~/components/UI/featureCard.vue";
import { register } from "swiper/element/bundle";
register();
</script>

<style scoped>
swiper-container::part(bullet-active) {
  background-color: white;
}
</style>
