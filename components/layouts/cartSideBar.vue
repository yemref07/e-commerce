<template>
  <div
    ref="sidebar"
    class="fixed top-0 z-50 right-0 h-screen overflow-y-auto duration-100 transition-transform bg-white w-80 px-4 py-10 drop-shadow-md"
    :class="{ 'translate-x-full': !cartVisibility }"
  >
    <div class="flex flex-col">

      <div class="flex justify-between border-b pb-4">
        <h2 class="md:text-lg font-semibold">Shopping Cart</h2>
        <Icon name="mdi:close" size="26" class="text-tblack cursor-pointer" @click="hideSideBar" />
      </div>

      <div
        class="grid grid-cols-4 justify-between items-center mt-4 gap-4 border-b pb-5"
        v-for="(item, index) in cartList"
        :key="index"
      >
        <nuxt-link :to="`/categories/${item.category}/${item.name}?productId=${item.id}`" :title="item.name">
          <img
            :src="item.image"
            alt=""
            class="w-16 rounded-md cursor-pointer"
          />
        </nuxt-link>

        <div class="col-span-2">
          <h4 class="text-tblack cursor-pointer text-sm">
            <nuxt-link :to="`/categories/${item.category}/${item.name}?productId=${item.id}`" :title="item.name" class="font-semibold">
              {{ item.name }}
            </nuxt-link>
          </h4>
          <p class="text-sm">
            <span class="text-tpurple font-semibold">
              {{ item.price }}$ 
            </span>
            x 
            {{ item.quantity }}
          </p>
        </div>

        <div class="">
          <Icon
            name="mdi:close"
            size="18"
            class="text-tblack cursor-pointer hover:text-orange-500"
            @click="removeCart(item)"
          />
        </div>
      </div>

      <div class="pt-5 mt-8 absolute bottom-10 right-0 left-0 px-4">

        <div class="flex justify-between mb-5 text-sm">
          <span class="">Subtotal:</span>
          <span class="font-semibold">${{cartTotalCost }}</span>
        </div>

        <div class="flex flex-col gap-3 justify-center items-center">
          <nuxt-link to="/cart" title="View Cart" class="text-center px-10 py-2 bg-orange-500 text-white w-full hover:bg-slate-900 transition-all delay-75">
            View Cart
          </nuxt-link>
          <button class="px-10 py-2 bg-gray-200 text-tblack w-full">Checkout</button>
        </div>



      </div>

    </div>
  </div>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50 z-40"
    :class="{ 'translate-x-full': !cartVisibility}"
  ></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cart";
import { onClickOutside } from "@vueuse/core";
import { useCartSideBar } from "~/store/cartSideBar";

const sidebar = ref(null);
const cartStore = useCartStore();
const { cartList,cartTotalCost  } = storeToRefs(cartStore);
const { removeCart } = cartStore;

const cartSideBar = useCartSideBar()
const {showSideBar, hideSideBar} = cartSideBar
const {cartVisibility} = storeToRefs(cartSideBar)

onClickOutside(sidebar, (event) => hideSideBar());


</script>

<style lang="css" scoped></style>
