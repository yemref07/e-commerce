<template>
  <breadcrumb title="Home" :subtitle="catName" alignment="start" />

  <container class="mt-16 text-tblack">
    <div class="grid lg:grid-cols-6 xl:grid-cols-6 gap-6 lg:gap-2">
      <div class="order-2 lg:order-1 lg:col-span-1 xl:col-span-1">
        <div class="flex flex-col">
          <h3 class="font-medium text-base text-tblack">Price Filter</h3>

          <div class="relative mb-6">
            <input
              type="range"
              value="1000"
              min="100"
              max="1500"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400"
            />
            <span
              class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6"
              >$100</span
            >
            <span
              class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
              >$500</span
            >
            <span
              class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6"
              >$1K</span
            >
            <span
              class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6"
              >$1.5K</span
            >
          </div>

          <button
            class="px-6 py-3 md:py-1 bg-gray-100 mt-4 w-full md:w-fit ml-auto"
          >
            Filter
          </button>
        </div>

        <div class="flex flex-col mt-10">
          <h3 class="font-medium text-base text-tblack border-b-2 pb-2">
            Product Status
          </h3>

          <div class="my-1 mt-4">
            <customCheckbox class="inline-block" />
            <span class="ms-2 text-sm">On Sale</span>
          </div>

          <div class="my-1">
            <customCheckbox class="inline-block" />
            <span class="ms-2 text-sm">In Stock</span>
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <h3 class="font-medium text-base text-tblack border-b-2 pb-2">
            Categories
          </h3>

          <ul class="leading-8 text-sm overflow-y-auto h-48 mt-4">
            <li
              v-for="(item, index) in allProductsCat"
              :key="index"
              class="capitalize cursor-pointer hover:text-orange-500"
            >
              <icon name="ph:dot-duotone" class="text-torange" size="24" />
              <nuxt-link :to="`/categories/${item}`">
                {{ item }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="flex flex-col mt-10">
          <h3 class="font-medium text-base text-tblack border-b-2 pb-2">
            Top Rated Products
          </h3>

          <div class="flex flex-row gap-4 mt-4">
            <NuxtImg
              loading="lazy"
              src="/produc-detail-thumb-image/thumb1.jpg"
              alt=""
              width="75"
            />
            <div class="">
              <Icon
                v-for="(item, index) in 5"
                :key="index"
                name="solar:star-bold"
                size="14"
                class="text-tyellow"
              />
              <h4 class="text-sm mt-2 font-semibold">Apple iPad Air</h4>
              <span class="text-tblack text-sm">$70.00</span>
            </div>
          </div>

          <div class="flex flex-row gap-4 mt-4">
            <NuxtImg
              loading="lazy"
              src="/produc-detail-thumb-image/thumb1.jpg"
              alt=""
              width="75"
            />
            <div class="">
              <Icon
                v-for="(item, index) in 5"
                :key="index"
                name="solar:star-bold"
                size="14"
                class="text-tyellow"
              />
              <h4 class="text-sm mt-2 font-semibold">Apple iPad Air</h4>
              <span class="text-tblack text-sm">$70.00</span>
            </div>
          </div>

          <div class="flex flex-row gap-4 mt-4">
            <NuxtImg
              loading="lazy"
              src="/produc-detail-thumb-image/thumb1.jpg"
              alt=""
              width="75"
            />
            <div class="">
              <Icon
                v-for="(item, index) in 5"
                :key="index"
                name="solar:star-bold"
                size="14"
                class="text-tyellow"
              />
              <h4 class="text-sm mt-2 font-semibold">Apple iPad Air</h4>
              <span class="text-tblack text-sm">$70.00</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <h3 class="font-medium text-base text-tblack border-b-2 pb-2">
            Popular Brands
          </h3>
          <div class="flex items-center mt-4 flex-wrap">
            <NuxtImg
              loading="lazy"
              src="/popular-brands/6.svg"
              alt=""
              width="90"
              class="p-3"
            />
            <NuxtImg
              loading="lazy"
              src="/popular-brands/4.svg"
              alt=""
              width="90"
              class="p-3"
            />
            <NuxtImg
              loading="lazy"
              src="/popular-brands/2.svg"
              alt=""
              width="90"
              class="p-3"
            />
            <NuxtImg
              loading="lazy"
              src="/popular-brands/6.svg"
              alt=""
              width="90"
              class="p-3"
            />
            <NuxtImg
              loading="lazy"
              src="/popular-brands/4.svg"
              alt=""
              width="90"
              class="p-3"
            />
            <NuxtImg
              loading="lazy"
              src="/popular-brands/2.svg"
              alt=""
              width="90"
              class="p-3"
            />
          </div>
        </div>
      </div>

      <div class="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 lg:ml-12">
        <div
          class="flex flex-row justify-start lg:justify-between items-start gap-4 flex-wrap g:gap-0"
        >
          <div class="text-muted">
            <h3>
              Showing {{ categoryProducts?.length }} results for
              <span class="capitalize">{{ catName }}</span>
            </h3>
          </div>

          <div class="w-48" @mouseleave="toggleSortInput(false)">
            <div
              class="border px-6 py-2 bg-slate-50 rounded-md cursor-pointer flex justify-between items-center"
              @mouseenter="toggleSortInput(true)"
            >
              <span> {{ sortInput.selectedValue }} </span>
              <icon name="lucide:arrow-up-down" class="text-tblack" size="16" />
            </div>

            <div
              class="bg-white border transition-all z-20 absolute w-48"
              :class="{
                'visible opacity-100': sortInput.isVisible,
                'invisible opacity-0': !sortInput.isVisible,
              }"
            >
              <ul class="leading-8 text-sm ms-6 py-3 cursor-pointer">
                <li
                  v-for="(item, index) in sortInput.sortCriterias"
                  :key="index"
                  class="hover:text-orange-500 transition-colors duration-75"
                  @click="setSortingCriteria(item)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 lg:mt-4"
        >
          <div v-for="(item, index) in categoryProducts" :key="index">
            <productCard
              :cat="item.category"
              :name="item.title"
              :img="item.images[0]"
              :price="item.price"
              :rate="item.rating"
              :review="item.stock.toString()"
              :product-i-d="item.id.toString()"
            />
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import customCheckbox from "~/components/UI/customCheckbox.vue";
import productCard from "~/components/products/productCard.vue";
import { useProductsStore } from "~/store/products";

const route = useRoute();
const catName = computed(() => {
  return route.params.categoryName;
});

const productStore = useProductsStore();
const { categoryProducts, allProductsCat } = storeToRefs(productStore);
const { getProductsOfCategory, getAllProductsCat } = productStore;

onMounted(async () => {
  //Get all products data in category
  await getProductsOfCategory(catName.value);

  //For listing categories in sidebar
  await getAllProductsCat();
});

//manage product criteria select box
const sortInput = reactive({
  selectedValue: "Default Sorting",
  isVisible: false,
  sortCriterias: ["Low To Hight", "Hight To Low"],
});

const toggleSortInput = (param: boolean) => {
  sortInput.isVisible = param;
};

const setSortingCriteria = (param: string) => {
  sortInput.selectedValue = param;
  //close sort criteria selection
  toggleSortInput(false);
};

const sortedProducts = ref<any>();

//Watch sorting criteria , and accordingly sort the products
const watchSort = watch(
  () => sortInput.selectedValue,
  () => {
    if (sortInput.selectedValue === "Low To Hight" && categoryProducts.value) {
      sortedProducts.value = categoryProducts.value.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortInput.selectedValue === "Hight To Low" && categoryProducts.value) {
      sortedProducts.value = categoryProducts.value.sort(
        (a, b) => b?.price - a?.price
      );
    }

    if (categoryProducts.value) {
      sortedProducts.value = categoryProducts.value;
    }
  }
);

const pageTitle = computed(() => {
  return route.params?.categoryName.replace(/-/g, " ") + " | Dummy E-Commerce";
});

useHead({
  title: () => pageTitle.value,
  meta: [
    {
      name: "description",
      content:
        "Explore a wide variety of products across all categories on Dummy E-Commerce.",
    },
    { property: "og:title", content: "Shop All Categories | Dummy E-Commerce" }, // Consistent Open Graph title
    {
      property: "og:description",
      content:
        "Explore a wide variety of products across all categories on Dummy E-Commerce.",
    }, // Aligned Open Graph description
    { name: "twitter:card", content: "summary" }, // Twitter card type
    {
      name: "twitter:title",
      content: "Shop All Categories | Dummy E-Commerce",
    }, // Consistent Twitter title
  ],
});
</script>

<style lang="css" scoped></style>
