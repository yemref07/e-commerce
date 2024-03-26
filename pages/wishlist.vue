<template>
  <breadcrumb title="Wishlist" subtitle="Wish List" />
  <container class="mt-10" v-if="wishlist.length > 0">
    <div class="mb-10 md:mb-5" v-for="(item, index) in wishlist" :key="index">
      <div
        class="flex flex-row bg-gray-200 py-2 px-4 md:px-10 justify-between items-center rounded-t-md text-xs md:text-sm"
      >
        <span> <strong>Seller: </strong> Dummy E-Commerce </span>
        <span>
          <strong> 5% discount </strong>on purchases over 400 dollars.
        </span>
      </div>

      <div
        class="flex flex-row flex-wrap justify-between items-center border-2 p-2 md:p-5 rounded-b-md gap-5"
      >
        <div class="flex flex-col items-center md:items-start flex-wrap gap-4">
          <nuxt-link
            :to="`/categories/${item.category}/${item.name}?productId=${item.id}`"
            class="cursor-pointer"
          >
            <img :src="item.image" alt="Play Station 5 Console" width="100" />
          </nuxt-link>

          <span class="text-tblack text-sm capitalize font-semibold">
            {{ item.name }}
          </span>
        </div>

        <span class="">Shipped within 2 days</span>
        <span class="">{{ item.price || 0 }}$</span>
        <span class=""> - {{ item.quantity }} -</span>

        <button
        @click="addCart(item)"
          class="cursor-pointer bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-4 py-2 rounded-md hidden md:block"
        >
          Add Cart
        </button>

        <Icon
          name="ph:trash-light"
          class="cursor-pointer hover:text-orange-500"
          size="28"
          @click="removeWishList(item.id)"
        />
      </div>

      <button
      @click="addCart(item)"
        class="w-full cursor-pointer bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-10 py-3 rounded-md md:hidden"
      >
        Add Cart
      </button>
    </div>
  </container>

  <container v-else class="mt-10">
    <div class="flex flex-col justify-center items-center gap-4">
      <div class="bg-orange-200 rounded-full p-4">
        <Icon name="ph:heart-fill" size="42" class="text-orange-500" />
      </div>
      <h2 class="font-medium text-lg md:text-2xl text-torange">
        Favorite Product List Empty
      </h2>
      <p class="md:w-1/2 text-center text-base text-tblack md:text-lg">
        No products were found in your favorite list. You can add products you
        want to your favorites by clicking the 'Start Shopping' button.
      </p>
      <nuxt-link
        to="/categories"
        title="Start Shopping on Dummy E-Commerce"
        class="cursor-pointer bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-10 py-3 rounded-md mt-5"
        >Start Shopping</nuxt-link
      >
    </div>
  </container>
</template>

<script setup lang="ts">
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import { storeToRefs } from "pinia";
import { useWishlistStore } from "~/store/wishlist";
import { useCartStore } from "~/store/cart";

const wishlistStore = useWishlistStore();

const { wishlist } = storeToRefs(wishlistStore);
const { removeWishList } = wishlistStore;

const cartStore = useCartStore()
const {addCart} = cartStore
</script>

<style lang="scss" scoped></style>
