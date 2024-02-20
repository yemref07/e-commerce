<template>
  <breadcrumb
    title="All Categories"
    subtitle="Categories"
    alignment="baseline"
  />
  <container class="mt-10">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <div
        class="col-span-1 justify-center items-center"
        v-for="(item, index) in allCategories"
        :key="index"
      >
        <div
          class="bg-gray-100 text-tblack py-12 px-4 text-center border-b cursor-pointer"
          @click="goCatProducts(item)"
        >
          <nuxt-link :to="`categories/${item}`">
              <h2 class="text-xl lg:text-2xl font-semibold text-tblack capitalize">
                {{ item }}
              </h2>
              <p class="mt-2 text-muted text-sm">10 Products</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import { useProductsStore } from "../../store/products";

const productStore = useProductsStore();
const { getAllProductsCat } = productStore;
const { allProductsCat } = storeToRefs(productStore);
const allCategories = ref<string[]>([]);

onMounted(async () => {
  await getAllProductsCat();
  allCategories.value = [...allProductsCat.value];
});

const router = useRouter();
const route = useRoute();

const goCatProducts = async (category: string) => {
  // await navigateTo({
  //   name:"categories",
  //   params: {
  //     catName: category,
  //   },
  // });
  // console.log(route.params,'route')
  // if(router){
  //   router.push({ name: "categories" ,params:{id:category}})
  // }
};
</script>

<style scoped lang="scss"></style>
