<template>
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
            @click="setActiveTab(1)"
          >
            Electronics
          </button>
        </div>

        <div class="">
          <button
            class="text-muted text-base lg:text-xl"
            @click="setActiveTab(2)"
          >
            Mens Clothing
          </button>
        </div>

        <div class="">
          <button
            class="text-muted text-base lg:text-xl"
            @click="setActiveTab(3)"
          >
            Womens Clothing
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="activeTab === 1"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5"
    >
      <div class="" v-for="(item, index) in electronics" :key="index">
        <productCard
          :cat="item.category"
          :name="item.title"
          :rate="item.rating.rate"
          :price="item.price"
          :img="item.image"
          :review="item.rating.count"
        />
      </div>
    </div>

    <div
      v-else-if="activeTab === 2"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5"
    >
      <div class="" v-for="(item, index) in mensCloth" :key="index">
        <productCard
          :cat="item.category"
          :name="item.title"
          :rate="item.rating.rate"
          :price="item.price"
          :img="item.image"
          :review="item.rating.count"
        />
      </div>
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5"
    >
      <div class="" v-for="(item, index) in womensCloth" :key="index">
        <productCard
          :cat="item.category"
          :name="item.title"
          :rate="item.rating.rate"
          :price="item.price"
          :img="item.image"
          :review="item.rating.count"
        />
      </div>
    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
import productCard from "./productCard.vue";
import { useProductStore } from "~/store/trendProducts";
const productStore = useProductStore();

const { dataToStore, refreshEl, updateStoreData, callRefresh } = productStore;

const {
  data: electronics,
  pending: elPending,
  error: elError,
  refresh: elRefresh,
} = await useFetch(`https://fakestoreapi.com/products/category/electronics`, {
  server: false,
});

updateStoreData("electronics", {
  data: electronics,
  error: elError,
  pending: elPending,
});

callRefresh(elRefresh, "electronics");

const {
  data: womensCloth,
  pending: womenPending,
  error: womenError,
  refresh: womenRefresh,
} = await useFetch(
  `https://fakestoreapi.com/products/category/women's%20clothing`,
  {
    server: false,
  }
);

const {
  data: mensCloth,
  pending: menPending,
  error: menError,
  refresh: menRefresh,
} = await useFetch(
  `https://fakestoreapi.com/products/category/men's%20clothing`,
  {
    server: false,
  }
);

const {
  data: jewelery,
  pending: jeweleryPending,
  error: jeweleryError,
  refresh: jeweleryRefresh,
} = await useFetch(
  `https://fakestoreapi.com/products/category/men's%20jewelery`,
  {
    server: false,
  }
);

const activeTab = ref(1);

const setActiveTab = (param) => {
  activeTab.value = param;
};
</script>

<style scoped></style>
~/store/trendProducts