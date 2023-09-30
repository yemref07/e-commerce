<template>
  <swiper-container
    slides-per-view="1"
    speed="500"
    loop="true"
    css-mode="true"
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
</template>

<script setup>
import slideItem from "~/components/UI/slideItem.vue";
import { register } from "swiper/element/bundle";
register();

const swiper = ref(null);
</script>

<style scoped>
swiper-container::part(bullet-active) {
  background-color: white;
}
</style>
