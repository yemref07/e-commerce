<template>
  <swiper-container
    :pagination="false"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :space-between="30"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      '1200': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
  >
    <swiper-slide>
      <blogSlideItem
        title="When Buying A PC?"
        tag="PC, Budget"
        desc="An important factor to consider when buying any PC is the processor. This is the heart of the machine, and it determines how fast your computer will be. The most important thing to look for in a processor is its clock speed, measured in GHz."
        img="/blog-demo-images/blog-1.jpg"
      />
    </swiper-slide>

    <swiper-slide>
      <blogSlideItem
        title="When Buying A Headphone?"
        tag="PC, Budget"
        desc="An important factor to consider when buying any PC is the processor. This is the heart of the machine, and it determines how fast your computer will be. The most important thing to look for in a processor is its clock speed, measured in GHz."
        img="/blog-demo-images/blog-2.jpg"
      />
    </swiper-slide>

    <swiper-slide>
      <blogSlideItem
        title="Technologies and Kids"
        tag="PC, Budget"
        desc="An important factor to consider when buying any PC is the processor. This is the heart of the machine, and it determines how fast your computer will be. The most important thing to look for in a processor is its clock speed, measured in GHz."
        img="/blog-demo-images/blog-3.jpg"
      />
    </swiper-slide>

    <swiper-slide>
      <blogSlideItem
        title="Technologies and Kids"
        tag="PC, Budget"
        desc="An important factor to consider when buying any PC is the processor. This is the heart of the machine, and it determines how fast your computer will be. The most important thing to look for in a processor is its clock speed, measured in GHz."
        img="/blog-demo-images/blog-3.jpg"
      />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import blogSlideItem from "./blogSlideItem.vue";
register();


</script>

<style scoped></style>
