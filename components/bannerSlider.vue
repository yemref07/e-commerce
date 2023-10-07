<template>
  <swiper-container
    direction="vertical"
    :pagination="true"
    :pagination-clickable="true"
    slides-per-view="1"
    class="banner-slider"
  >
    <swiper-slide
      class="bg-torange grid lg:grid-cols-2 md:py-10 md:px-6 lg:py-14 lg:px-20 place-content-center"
    >
      <bannerSlideItem
        title1="Best Selling Tablets"
        title2="Samsung Galaxy Tab S10, 8GB Ram"
        img="/product-banners/product-banner-3.png"
        price="1200"
        reduced-price="900"
        productID="lorem"
      />
    </swiper-slide>

    <swiper-slide
      class="bg-tpurple grid lg:grid-cols-2 md:py-10 md:px-6 lg:py-14 lg:px-20 place-content-center"
    >
      <bannerSlideItem
        title1="Best Selling Tablets"
        title2="Samsung Galaxy Tab S10, 8GB Ram"
        img="/product-banners/product-banner-3.png"
        price="1200"
        reduced-price="900"
        productID="lorem"
      />
    </swiper-slide>

    <swiper-slide
      class="bg-tpink grid lg:grid-cols-2 md:py-10 md:px-6 lg:py-14 lg:px-20 place-content-center"
    >
      <bannerSlideItem
        title1="Best Selling Tablets"
        title2="Samsung Galaxy Tab S10, 8GB Ram"
        img="/product-banners/product-banner-3.png"
        price="1200"
        reduced-price="900"
        productID="lorem"
      />
    </swiper-slide>

  </swiper-container>

</template>

<script setup>
import bannerSlideItem from "./UI/bannerSlideItem.vue";
import { register } from "swiper/element/bundle";
register();
</script>

<style scoped>
.banner-slider {
  height: 450px;
}

@media only screen and (max-width: 1200px) {
  .banner-slider {
    height: 400px;
  }
}

@media only screen and (max-width: 991px) {
  .banner-slider {
    height: 500px;
  }
}

@media only screen and (max-width: 7681px) {
  .banner-slider {
    height: 500px;
  }
}

@media only screen and (max-width: 600px) {
  .banner-slider {
    height: 400px;
  }
}
@media only screen and (max-width: 425px) {
  .banner-slider {
    height: 400px;
  }
}
</style>
