<template>
  <div
    class="flex flex-col border-2 border-slate-100 rounded-md product-card relative"
    @mouseenter="
      () => {
        setHover(true);
      }
    "
    @mouseleave="
      () => {
        setHover(false);
      }
    "
  >
    <div class="relative border-b-2 border-slate-100 p-5">
      <nuxt-link :to="`/categories/${props.cat}/${props.name}?productId=${props.productID}`" class="cursor-pointer">
        <img :src="props.img" alt="" class="ml-auto mr-auto w-46 h-36" />
      </nuxt-link>
    </div>
    <div class="p-5">
      <nuxt-link :to="`/categories/${props.cat}/${props.name}`" class="cursor-pointer">
        <span class="text-sm text-tpurple capitalize font-semibold">{{ props.cat.replace(/-/g, ' ') }}</span>
        <h3 class="font-semibold">{{ title }}</h3>

        <div class="flex items-center space-x-1 mt-4 mb-1 justify-start">
          <svg
            v-for="(item, index) in productRating "
            :key="index"
            class="w-4 h-4 text-yellow-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
          <svg
            v-for="(item, index) in emptyStars"
            :key="index"
            class="w-4 h-4 text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>

          <p class="text-muted text-sm">({{ review }} review)</p>
        </div>
        <p class="text-torange text-xl font-semibold mt-4">$ {{ parseInt(price) }}.00</p>
      </nuxt-link>
    </div>

    <productTool 
    :hover="toolHover" 

    :productID="props.productID" 
    :category = "props.cat"
    :name="props.name"
    :image="props.img"
    :price="props.price"

    />
  </div>
</template>

<script setup>
import productTool from "~/components/products/productTool.vue";

const rate = ref(null);
const remain = ref(null);
const toolHover = ref(false);

const props = defineProps({
  cat: String,
  name: String,
  rate: Number,
  price: Number,
  img: String,
  review:String,
  productID:Number,
});

const setRateStar = (param) => {
  rate.value = Math.round(param);
  remain.value = 5 - rate.value;
};

onMounted(() => {
  setRateStar(props.rate);
});

const setHover = (param) => {
  toolHover.value = param;
};

const productRating = computed(()=>{
  if(props.rate){
    return Math.round(props.rate)
  }
})

//Empty Stars
const emptyStars = computed(()=>{
  if(productRating.value){
    return 5 - productRating.value
  }
})


const title = computed(() => {
  if(props.name){
    return props.name.substring(0, 50);
  }
  else{
    return "No Name"
  }
});
</script>

<style scoped>
.product-card {
  transition: ease 0.5s;
  min-height: 380px;
}

@media only screen and (max-width: 768px) {
  .product-card {
    min-height: 350px;
  }
}

@media only screen and (max-width: 600px) {
  .product-card {
    min-height: 320px;
  }
}

.product-card:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
