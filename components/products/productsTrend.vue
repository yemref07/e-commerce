<template>
  <container class="lg:mt-20 md:mt-10 mt-6">
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
            :class="{'text-torange': activeTab === 1,'text-tblack' : activeTab !== 1}"
            class="text-base lg:text-xl"
            @click="setActiveTab(1)"
          >
            Electronics
          </button>
        </div>

        <div class="">
          <button
          :class="{'text-torange': activeTab === 2,'text-tblack' : activeTab !== 2}"
            class="text-base lg:text-xl"
            @click="setActiveTab(2)"
          >
            Mens Clothing
          </button>
        </div>

        <div class="">
          <button
            :class="{'text-torange': activeTab === 3,'text-tblack' : activeTab !== 3}"
            class="text-base lg:text-xl"
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

      <div class="" v-for="(item, index) in electronics?.products" :key="index">
        <productCard
          :cat="item.category"
          :name="item.title"
          :rate="item.rating"
          :price="item.price"
          :img="item.images[0]"
          :productID="item.id"
          review="200+"
        />
      </div>
    </div>

    <div
      v-else-if="activeTab === 2"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5"
    >
      <div class="" v-for="(item, index) in mensCloth?.products" :key="index">
        <productCard
          :productID="item.id"
          :cat="item.category"
          :name="item.title"
          :rate="item.rating"
          :price="item.price"
          :img="item.images[0]"
          review="25"
        />
      </div>
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5"
    >
      <div class="" v-for="(item, index) in womensCloth?.products" :key="index">
        <productCard
          :productID="item.id"
          :cat="item?.category"
          :name="item?.title"
          :rate="item?.rating"
          :price="parseFloat(item?.price)"
          :img="item?.images[0]"
          review="25"
        />
      </div>
    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
import productCard from "./productCard.vue";
import { useTrendProductStore } from "~/store/trendProducts";
const productStore = useTrendProductStore();
const { dataToStore, refreshEl, updateStoreData, callRefresh } = productStore;


const {
  data: electronics,
  pending: elPending,
  error: elError,
  refresh: elRefresh,
} = await useFetch(`https://dummyjson.com/products/category/smartphones`, {
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
  `https://dummyjson.com/products/category/womens-dresses`,
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
  `https://dummyjson.com/products/category/mens-shirts`,
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
