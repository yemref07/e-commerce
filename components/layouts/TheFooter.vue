<template>
  <container class="mt-10">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-5 py-20 gap-10 md:gap-14 lg:gap-5 w-full"
    >
      <div class="lg:col-span-2">
        <NuxtImg
      loading="lazy" src="/logos/commerce-logo.svg" alt="Dummy E-Commerce Logo" class="mb-5  w-44 md:w-60" />
        <p class="md:w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          dignissimos ipsam quidem.
        </p>
        <div class="block mt-5 space-x-3">
          <a href="/" title="Dummy E-Commerce Facebook">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:facebook-fill"  class="w-6 h-6" />
            </div>
          </a>
          <a href="/" title="Dummy E-Commerce Twitter">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:twitter-fill" class="w-6 h-6" />
            </div>
          </a>

          <a href="" title="Dummy E-Commerce Instagram">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:instagram-fill" class="w-6 h-6" />
            </div>
          </a>

          <a href="" title="Dummy E-Commerce Youtube">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:youtube-fill" class="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <h2 class="mb-5 text-lg md:text-xl lg:text-2xl font-semibold">Categories</h2>
        <ul class="space-y-3">

          <li v-for="(item, index) in trendCategories" :key="index" class=" capitalize ">
            <nuxt-link :to="`/categories/${item}`" :title="item" class="hover:text-orange-500 duration-75">{{item.replace('/g'," ")}}</nuxt-link>
          </li>
  
        </ul>
      </div>

      <div class="">
        <h2 class="mb-5 text-lg md:text-xl lg:text-2xl font-semibold">Information</h2>
        <ul class="space-y-3 ">
          <li>
            <nuxt-link to="/" title="Home" class="hover:text-orange-500 duration-75">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" title="Dummy E-Commerce About" class="hover:text-orange-500 duration-75">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" title="Dummy E-Commerce Blog" class="hover:text-orange-500 duration-75">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms-and-conditions" title="Dummy E-Commerce Terms And Condition" class="hover:text-orange-500 duration-75">Terms And Condition</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" title="Dummy E-Commerce Contact" class="hover:text-orange-500 duration-75">Contact</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="">
        <h2 class="mb-5 text-lg md:text-xl lg:text-2xl font-semibold">
          Talk To Us
        </h2>
        <ul class="space-y-3">
          <li>
            <a href="tel:" title="Dummy E-Commerce Phone Line">
              Got Questions? Call us
              <h4
                class="font-semibold text-torange text-md lg:text-xl xxl:text-2xl mt-2"
              >
                +90 534 400 76 52
              </h4>
            </a>
          </li>
          <li>
            <a href="mailto:" title="Dummy E-Commerce Email">
              <icon name="ph:envelope-light" size="28" class="text-tblack" />
              info@dummy.com
            </a>
          </li>
          <li>
            <a href="" title="Dummy E-Commerce Address">
              <icon
                name="system-uicons:location"
                size="28"
                class="text-tblack"
              />
              Lorem ipsum dolor.
            </a>
          </li>
        </ul>
      </div>
    </div>
  </container>
</template>

<script setup lang='ts'>
import container from "~/components/UI/container.vue";
import { useProductsStore } from "~/store/products";
import { storeToRefs } from "pinia";

const productStore = useProductsStore()
const { allProductsCat } = storeToRefs(productStore)
const { getAllProductsCat } = productStore

const trendCategories = computed(()=>{
  return allProductsCat.value.slice(0,5)
})


onMounted( async() => {
  await getAllProductsCat()
})

</script>

<style scoped>
.footer-icon {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: var(--tblack);
  opacity: 0.8;
}

.footer-icon:hover {
  box-shadow: rgba(0, 0, 0, 0.301) 0px 7px 29px 0px;
}
</style>
