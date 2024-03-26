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
        catLink="/categories"
        bgColor="#115061"
        img="/slider/slider-img-1.webp"
      />
    </swiper-slide>
    <swiper-slide>
      <slideItem
        title1="The Best Electronic Devices"
        title2="Exclusive offer %10 off this week"
        catLink="/categories"
        bgColor="#115061"
        img="/slider/slider-img-2.webp"
      />
    </swiper-slide>
    <swiper-slide>
      <slideItem
        title1="The Best Electronic Devices"
        title2="Exclusive offer %10 off this week"
        catLink="/categories"
        bgColor="#115061"
        img="/slider/slider-img-3.webp"
      />
    </swiper-slide>
  </swiper-container>

  <container class="lg:mt-20 md:mt-10 mt-6">
    <div
      class="flex flex-row justify-center md:justify-between items-center flex-wrap gap-5"
    >
      <catCardCircle
        title="Headphones"
        link="categories/fragrances"
        product-stock="25"
        img="/produtc-cat-images/product-cat-1.png"
      />
      <catCardCircle
        title="Smartphones"
        link="categories/smartphones"
        product-stock="25"
        img="/produtc-cat-images/product-cat-2.png"
      />
      <catCardCircle
        title="Laptops"
        link="categories/laptops"
        product-stock="25"
        img="/produtc-cat-images/product-cat-3.png"
      />
      <catCardCircle
        title="Watches"
        link="categories/womens-shoes"
        product-stock="25"
        img="/produtc-cat-images/product-cat-4.png"
      />
      <catCardCircle
        title="Headphones"
        link="categories/womens-dress"
        product-stock="25"
        img="/produtc-cat-images/product-cat-5.png"
      />
    </div>
  </container>

  <container class="lg:mt-20 md:mt-10 mt-6">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
      <featureCard
        icon-size=42
        title="Free Delivary"
        desc="Orders from all item"
        icon-name="ph:truck-light"
      />
      <featureCard
        icon-size=42
        title="Return & Refund"
        desc="Monet back guarentee"
        icon-name="clarity:dollar-line"
      />
      <featureCard
        icon-size=42
        title="Member Discount"
        desc="Onevery order over $140.00"
        icon-name="iconamoon:discount-light"
      />
      <featureCard
        icon-size=42
        title="Support 24/7"
        desc="Contact us 24 hours a day"
        icon-name="bx:support"
      />
    </div>
  </container>

  <productsTrend />

  <container class="lg:mt-20 md:mt-10 mt-6">
    <div class="grid xl:grid-cols-3 gap-5">
      <div class="flex flex-col xl:col-span-2 product-bg-1">
        <span class="mb-2 inline-block">Sale 20% off all store</span>
        <h3 class="font-semibold text-3xl lg:w-2/4">
          Smartphone Iphone X Pro 2024
        </h3>
        <nuxt-link
          to="/categories/smartphones/iPhone%20X?productId=2"
          class="inline-block mt-5 text-lg text-tblack hover:text-orange-500 cursor-pointer delay-100"
          title="Smartphone Iphone X Pro 2024"
        >
          Shop Now
          <Icon name="formkit:arrowright" size="28" />
        </nuxt-link>
      </div>

      <div class="flex flex-col xl:col-span-1 product-bg-2">
        <h3 class="font-semibold text-lg">HyperX Cloud II Wireless</h3>
        <span class="mb-2 block">Sale 24% off all store</span>
        <nuxt-link
          title="HyperX Cloud II Wireless"
          to="/categories/laptops/MacBook%20Pro?productId=6"
          class="inline-block mt-5 text-lg text-tblack cursor-pointer delay-100"
        >
          Shop Now
          <Icon name="formkit:arrowright" class=" " size="28" />
        </nuxt-link>
      </div>
    </div>
  </container>

  <div class="w-full bg-ice py-12 lg:mt-20 md:mt-10 mt-6">
    <container class="lg:mt-20 md:mt-10 mt-6">
      <div
        class="flex flex-row justify-between items-center gap-5 lg:gap-10 xl:gap-12"
      >
        <div class="relative">
          <h2 class="font-semibold text-xl lg:text-4xl z-20 relative">
            Deal of The Day
          </h2>
          <svg
            class="text-torange absolute top-5 left-2 z-10"
            width="120"
            height="35"
            viewBox="0 0 114 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
              stroke="currentColor"
              stroke-width="4"
              stroke-miterlimit="3.8637"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
        <div class="grow hidden lg:block">
          <hr class="w-2/3 mx-auto bg-white h-1" />
        </div>
        <div class="">
          <nuxt-link
            title="View All Details"
            to="/"
            class="bg-torange text-white px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-slate-900 transition-all delay-75"
            >View All Deals</nuxt-link
          >
        </div>
      </div>

      <dealSlider class="lg:mt-20 md:mt-10 mt-6" />
      <bannerSlider class="lg:mt-20 md:mt-10 mt-6" />
    </container>
  </div>

  <container class="lg:mt-20 md:mt-10 mt-6">
    <productGrid />
  </container>

  <container class="lg:mt-20 md:mt-10 mt-6">
    <div class="flex flex-row items-center mb-20 justify-between">
      <div class="">
        <h2 class="text-tblack font-semibold text-xl lg:text-3xl">
          Latest News <br />
          & Articles
        </h2>
      </div>

      <div class="grow hidden lg:block">
        <hr class="w-3/4 ml-auto bg-gray-100 h-1 mr-12" />
      </div>

      <div class="">
        <nuxt-link
          title="View All Post"
          to="/"
          class="bg-torange text-white font-semibold px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-slate-900 transition-all delay-75"
          >View All Post</nuxt-link
        >
      </div>
    </div>

    <blogSlider />
  </container>

  <container class="lg:mt-20 md:mt-10 mt-6">
    <instagramPost />
  </container>

  <div class="w-full bg-torange py-12 lg:py-20 xl:py-32 lg:mt-20 md:mt-10 mt-6">
    <container>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div class="">
          <span class="text-gray-200 text-base md:text-lg"
            >Sale %30 Of All Electronics</span
          >
          <h3
            class="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-2"
          >
            Subscribe our Newsletter
          </h3>
        </div>

        <div class="mt-5 md:mt-0">
          <input
            type="text"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md focus:outline-none rounded-l-md inline-block h-10 md:h-16 px-2 md:px-6 w-2/3"
            placeholder="johndoe@email.com"
            required
          />
          <button
            class="bg-tblack text-white h-10 md:h-16 rounded-r-md inline-block text-sm px-2 md:px-6"
          >
            Subscribe
          </button>
        </div>
      </div>
    </container>
  </div>
</template>

<script setup>
import catCardCircle from "~/components/UI/catCardCircle.vue";
import slideItem from "~/components/sliders/mainSlideItem.vue";
import featureCard from "~/components/UI/featureCard.vue";
import container from "~/components/UI/container.vue";
import productsTrend from "~/components/products/productsTrend.vue";
import productGrid from "~/components/products/productGrid.vue";
import dealSlider from "~/components/sliders/dealSlider.vue";
import blogSlider from "~/components/sliders/blogSlider.vue";
import { register } from "swiper/element/bundle";
import bannerSlider from "~/components/sliders/bannerSlider.vue";
register();
const email = ref(null);


</script>

<style scoped>
swiper-container::part(bullet-active) {
  background-color: white;
}

.product-bg-1 {
  background: url(/product-banners/product-banner-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 260px;
  padding: 80px 40px;
  border-radius: 12px;
  width: 100%;
}
.product-bg-2 {
  background: url(/product-banners/product-banner-2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 260px;
  padding: 80px 40px;
  border-radius: 12px;
  width: 100%;
}
</style>
