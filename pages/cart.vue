<template>
  <breadcrumb title="Shopping Cart" subtitle="Cart" alignment="" />
  <div v-if="cartList.length > 0" class="">
    <container class="mt-10">
      <div class="grid md:grid-cols-5 gap-10">
        <div class="md:col-span-3 lg:col-span-4">
          <div v-for="(item, index) in cartList" :key="index" class="mb-5">
            <div
              class="flex flex-row bg-gray-200 py-2 px-4 md:px-10 justify-between items-center rounded-t-md text-sm"
            >
              <span> <strong>Seller: </strong> Dummy E-Commerce</span>
              <span>
                <strong> 5% discount </strong>on purchases over 400 dollars.
              </span>
            </div>

            <div
              class="flex flex-row flex-wrap justify-between items-center border-2 p-3 md:p-5 rounded-b-md gap-5"
            >
              <div
                class="flex flex-col items-center md:items-start flex-wrap gap-4"
              >
                <nuxt-link
                  :to="`/categories/${item.category}/${item.name}?productId=${item.id}`"
                  class="cursor-pointer"
                >
                  <NuxtImg
                    provider = "dummy"
                    loading="lazy"
                    :src="item.image"
                    alt="Play Station 5 Console"
                    width="100"
                  />
                </nuxt-link>

                <span class="text-tblack text-sm capitalize font-semibold">
                  {{ item.name }}
                </span>
              </div>

              <span class="">Shipped within 2 days</span>
              <span class="">{{ item.price || 0 }}$</span>
              <span class=""> - {{ item.quantity }} -</span>

              <Icon
                name="ph:trash-light"
                class="cursor-pointer hover:text-orange-500"
                size="28"
                @click="removeCart(item)"
              />
            </div>
          </div>
        </div>

        <div class="md:col-span-2 lg:col-span-1 hidden md:block">
          <div class="sticky top-10">
            <button
              class="bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-10 py-3 rounded-md w-full"
            >
              Confirm Cart
            </button>

            <div
              class="border-gray-200 border px-3 xl:px-5 py-8 mt-5 rounded-md text-tblack text-sm"
            >
              <div class="flex flex-row justify-between items-center">
                <span>Product Total:</span>
                <span class="font-semibold">{{ cartTotalCost }}$</span>
              </div>

              <div class="flex flex-row justify-between items-center mt-3">
                <span>Shipping:</span>
                <span v-if="cartList.length > 0" class="font-semibold"
                  >{{ shippingCost }}$</span
                >
              </div>

              <div
                class="flex flex-row justify-between items-center mt-3 border-b-2 pb-3"
              >
                <span>Discount:</span>
                <span
                  v-if="cartList.length > 0"
                  class="font-semibold text-torange"
                >
                  - {{ discountAmount }}$</span
                >
              </div>

              <div class="flex flex-row justify-between items-center mt-3">
                <span class="text-sm xl:text-lg ">Cart Total:</span>
                <span class="font-semibold text-sm xl:text-lg text-tpurple"
                  >{{ Math.round(cartTotal) }}.00$</span
                >
              </div>

              <NuxtImg
                loading="lazy"
                src="/payment/payment-option.png"
                alt="E-Commerce Payment Options"
                class="w-full mt-5"
              />
            </div>

            <button
              class="bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-10 py-3 rounded-md w-full mt-5"
            >
              Confirm Cart
            </button>
          </div>
        </div>
      </div>
    </container>

    <div class="fixed md:hidden bottom-0 bg-white py-4 z-50 w-full">
      <div class="flex items-center justify-around">
        <div class="text-sm">
          <p>Total Price</p>
          <p class="text-sm font-semibold">{{ cartTotal }}.00$</p>
          <p class="text-orange-500">Free Shipping</p>
        </div>

        <div class="">
          <button
            class="bg-orange-500 hover:bg-slate-900 transition-all delay-75 text-white px-10 py-3 rounded-md w-full"
          >
            Confirm Cart
          </button>
        </div>
      </div>
    </div>
  </div>

  <container v-else class="mt-10">
    <div class="flex flex-col justify-center items-center gap-4">
      <div class="bg-orange-200 rounded-full p-4">
        <Icon name="bi:cart-fill" size="38" class="text-orange-500" />
      </div>
      <h2 class="font-medium text-lg md:text-2xl text-torange">
        Cart List Empty
      </h2>
      <p class="md:w-1/2 text-center text-base text-tblack md:text-lg">
        No products were found in your cart list. Lets start the shopping with
        dummy e-commerces huge discounts.
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
import { storeToRefs } from "pinia";
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import { useCartStore } from "~/store/cart";
useHead({
  title: "Your Cart | Dummy E-Commerce",
  meta: [
    {
      name: "description",
      content: "Review your shopping cart on Dummy E-Commerce.",
    },
    { name: "robots", content: "noindex, follow" },
    { property: "og:url", content: "https://dumy-commercee.netlify.app/cart" }, // Open Graph URL (replace with your actual URL)
    // Additional Open Graph and Twitter card tags can be added based on cart items
  ],
});

const cartStore = useCartStore();
const { removeCart, addCart } = cartStore;
const { cartList, cartTotalCost } = storeToRefs(cartStore);

const shippingCost = ref(30);
const discountAmount = ref(15);

const cartTotal = computed(() => {
  return cartTotalCost.value + shippingCost.value - discountAmount.value;
});
</script>

<style lang="scss" scoped></style>
