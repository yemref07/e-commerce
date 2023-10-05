<template>
  <div
    class="flex flex-col bg-white py-6 px-6 gap-5 relative"
    @mouseenter="
      () => {
        hoverTool(true);
      }
    "
    @mouseleave="
      () => {
        hoverTool(false);
      }
    "
  >
    <div class="border-b-2 relative">
      <img
        :src="props.img"
        alt=""
        class="w-full h-auto"
      />
      <button
        class="bg-tblack text-white d-block py-2 w-full btn-add"
        :class="{ 'btn-add-hover': hover }"
      >
        Add To Cart
      </button>
    </div>

    <div class="">
      <span class="text-slate-600">{{props.cat}}</span>
      <h3 class="text-lg font-medium">
       {{props.title}}
      </h3>
    </div>
    <productTool :hover="hover" productID="lorem" />
  </div>
</template>

<script setup>
import productTool from "./productTool.vue";

const props = defineProps({
  cat: String,
  title: String,
  img: String,
  price: Number,
});

const hover = ref(false);

const hoverTool = (param) => {
  hover.value = param;
};
</script>

<style scoped>
.btn-add {
  visibility: hidden;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s 0s ease-out;
}

.btn-add-hover {
  visibility: visible !important;
  opacity: 1 !important;
  bottom: -10px !important;
}

.btn-add:hover {
  background-color: var(--torange);
  color: white;
}
</style>
