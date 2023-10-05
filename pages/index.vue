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

  <container class="mt-20">
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
  </container>

  <container class="mt-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
      <featureCard
        icon-size="42"
        title="Free Delivary"
        desc="Orders from all item"
        icon-name="ph:truck-light"
      />
      <featureCard
        icon-size="42"
        title="Return & Refund"
        desc="Monet back guarentee"
        icon-name="clarity:dollar-line"
      />
      <featureCard
        icon-size="42"
        title="Member Discount"
        desc="Onevery order over $140.00"
        icon-name="iconamoon:discount-light"
      />
      <featureCard
        icon-size="42"
        title="Support 24/7"
        desc="Contact us 24 hours a day"
        icon-name="bx:support"
      />
    </div>
  </container>

  <container class="mt-20">
    <div class="flex flex-row justify-between items-center">
      <div class="relative">
        <h2 class="font-semibold text-xl lg:text-4xl z-20 relative">
          Trending Product
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

      <div class="grow">
        <hr class="w-2/3 mx-auto" />
      </div>

      <div class="flex gap-5">
        <div class="">
          <button
            class="text-black text-base lg:text-xl"
            @click="
              () => {
                setActiveTab(1);
              }
            "
          >
            New
          </button>
        </div>

        <div class="">
          <button
            class="text-muted text-base lg:text-xl"
            @click="
              () => {
                setActiveTab(2);
              }
            "
          >
            Featured
          </button>
        </div>

        <div class="">
          <button
            class="text-muted text-base lg:text-xl"
            @click="
              () => {
                setActiveTab(3);
              }
            "
          >
            Top Sellers
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
      <div class="">
        <productCard
          cat="Smart Phone"
          name="Iphone 15 Pro Max"
          rate="4"
          price="400"
        />
      </div>
    </div>
  </container>

  <container class="mt-20">
    <div class="grid xl:grid-cols-3 gap-5">
      <div class="flex flex-col xl:col-span-2 product-bg-1">
        <span class="mb-2 inline-block">Sale 20% off all store</span>
        <h3 class="font-semibold text-3xl lg:w-2/4">
          Smartphone DMX S24 Pro 2023
        </h3>
        <nuxt-link
          to=""
          class="inline-block mt-5 text-lg text-tblack hover:text-orange-500 cursor-pointer delay-100"
        >
          Shop Now
          <Icon name="formkit:arrowright" class=" " size="28" />
        </nuxt-link>
      </div>

      <div class="flex flex-col xl:col-span-1 product-bg-2">
        <h3 class="font-semibold text-lg">HyperX Cloud II Wireless</h3>
        <span class="mb-2 block">Sale 24% off all store</span>
        <nuxt-link
          to=""
          class="inline-block mt-5 text-lg text-tblack cursor-pointer delay-100"
        >
          Shop Now
          <Icon name="formkit:arrowright" class=" " size="28" />
        </nuxt-link>
      </div>
    </div>
  </container>

  <div class="w-full bg-ice py-12 mt-20">
    <container class="mt-20">
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
            to="/"
            class="bg-torange text-white px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-slate-900 transition-all delay-75"
            >View All Deals</nuxt-link
          >
        </div>
      </div>

      <dealSlider class="mt-20" />
    </container>
  </div>
</template>

<script setup>
import catCardCircle from "~/components/UI/catCardCircle.vue";
import slideItem from "~/components/UI/slideItem.vue";
import featureCard from "~/components/UI/featureCard.vue";
import container from "~/components/UI/container.vue";
import productCard from "~/components/UI/productCard.vue";
import dealSlider from "~/components/dealSlider.vue";
import { register } from "swiper/element/bundle";

const activeTab = ref(1);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

register();
</script>

<style scoped>
swiper-container::part(bullet-active) {
  background-color: white;
}

.product-bg-1 {
  background: url(../public/product-banners/product-banner-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 260px;
  padding: 80px 40px;
  border-radius: 12px;
  width: 100%;
}
.product-bg-2 {
  background: url(../public/product-banners/product-banner-2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 260px;
  padding: 80px 40px;
  border-radius: 12px;
  width: 100%;
}
</style>
