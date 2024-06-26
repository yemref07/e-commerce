<template>
  <breadcrumb
    title="All Categories"
    subtitle="Categories"
    alignment="baseline"
  />
  <container class="mt-10">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <div
        v-for="(item, index) in allCategories"
        :key="index"
        class="col-span-1 justify-center items-center"
      >
        <nuxt-link :to="`categories/${item}`">
          <div
            class="bg-gray-100 text-tblack py-12 px-4 text-center border-b cursor-pointer hover:translate-y-2.5 duration-75"
          >
            <h2
              class="text-xl lg:text-2xl font-semibold text-tblack capitalize"
            >
              {{ item.replace(/-/g, ' ') }}
            </h2>
            <p class="mt-2 text-muted text-sm">6 Products</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import { useProductsStore } from "../../store/products";

useHead({
  title: 'Shop All Categories | Dummy E-Commerce',
  meta: [
    { name: 'description', content: 'Explore a wide variety of products across all categories on Dummy E-Commerce.' },
    { property: 'og:title', content: 'Shop All Categories | Dummy E-Commerce' }, // Consistent Open Graph title
    { property: 'og:description', content: 'Explore a wide variety of products across all categories on Dummy E-Commerce.' }, // Aligned Open Graph description
    { name: 'twitter:card', content: 'summary' }, // Twitter card type
    { name: 'twitter:title', content: 'Shop All Categories | Dummy E-Commerce' }, // Consistent Twitter title
  ],
})

const productStore = useProductsStore();
const { getAllProductsCat } = productStore;
const { allProductsCat } = storeToRefs(productStore);
const allCategories = ref<string[]>([]);

onMounted(async () => {
  await getAllProductsCat();
  allCategories.value = [...allProductsCat.value];
});

const router = useRouter();

const goCatProducts = async (category: string) => {
  if (router) {
    router.push({ name: "categories", params: { id: category } });
  }
};
</script>

<style scoped lang="scss"></style>
