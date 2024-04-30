<template>
  <topHeader />
  <!-- main nav -->
  <nav class="sticky top-0 z-50 bg-white">
    <div
      class="container mx-auto px-5 lg:px-10 xl:px-10 2xl:px-20 hidden lg:block"
    >
      <div class="flex py-5 items-center justify-between">
        <div class="basis-1/4 lg:basis-1/3">
          <nuxt-link to="/" title="Home Page">
            <NuxtImg
              loading="lazy"
              src="/logos/commerce-logo.svg"
              alt="Dummy E-Commerce Logo"
              class="w-32 lg:w-40 xl:w-56"
            />
          </nuxt-link>
        </div>

        <div class="basis-2/4 lg:basis-1/3">
          <form @submit.prevent="onSubmit">
            <div
              class="flex flex-nowrap border-2 rounded-md border-gray-500 justify-between items-center py-1 px-2 xl:py-2 xl:px-4"
            >
              <div class="basis-2/4 text-sm items-center">
                <input
                  type="text"
                  class="text-black focus:outline-none w-full"
                  placeholder="Search For Products Like Phone, Dress"
                  v-model="searchInput"
                />
              </div>

              <div class="basis-2/4 grow">
                <div
                  class="flex justify-end items-center flex-nowrap flex-grow"
                >
                  <div class="">
                    <button
                      type="submit"
                      class="text-white bg-torange px-2 py-1 lg:px-2 lg:py-1 rounded-md"
                      @click.prevent="search"
                    >
                      Search
                      <div class="hidden xl:inline-block">
                        <Icon name="charm:search" size="22" color="white" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="basis-1/4 lg:basis-1/3">
          <div class="flex items-center justify-end">
            <div class="">
              <nuxt-link
                to="/user-profile"
                title="User Profile"
                v-if="isAuthenticated"
              >
                <NuxtImg
                  provider="dummy"
                  loading="lazy"
                  :src="profileImg"
                  alt="User Profile Image"
                  width="40"
                  class="ms-10 mr-3 cursor-pointer rounded-full"
                />
              </nuxt-link>

              <nuxt-link to="/signin" v-else title="Sıgn In">
                <Icon
                  name="carbon:user"
                  size="32"
                  class="ms-10 mr-3 cursor-pointer"
                />
              </nuxt-link>
            </div>

            <div class="hidden xl:flex flex-col mr-10" v-if="isAuthenticated">
              <nuxt-link
                to="/user-profile"
                class="cursor-pointer"
                title="Sign In Dummy E-commerce"
              >
                <span class="line-clamp-1"
                  >Welcome {{ userData?.firstName }}</span
                >
                <h3 class="font-semibold text-tpurple">My Account</h3>
              </nuxt-link>
            </div>

            <div class="hidden xl:flex flex-col mr-10" v-else>
              <nuxt-link
                to="/signin"
                class="cursor-pointer"
                title="Sign In Dummy E-commerce"
              >
                <span class="line-clamp-1">Hello, Sign In</span>
                <h3 class="font-semibold text-tpurple">Your Account</h3>
              </nuxt-link>
            </div>

            <div class="flex space-x-4">
              <div class="">
                <Icon
                  name="ph:arrows-down-up-thin"
                  size="26"
                  color="black"
                  class="block"
                />
              </div>
              <div class="cursor-pointer">
                <wishIcon :quantity="wishCount" />
              </div>
              <div class="cursor-pointer" @click="showSideBar">
                <cartIcon :quantity="cartCount" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto lg:px-10 xl:px-10 2xl:px-20 hidden lg:block">
      <div class="flex flex-row items-center justify-between border-t-2 py-3">
        <div class="flex gap-4 lg:gap-8 relative">
          <div class="">
            <nuxt-link
              to="/"
              class="text-lg hover:text-orange-500 delay-75 duration-75"
            >
              Home
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
              to="/categories"
              class="text-lg hover:text-orange-500 delay-75 duration-75"
            >
              All Categories</nuxt-link
            >
          </div>

          <div
            class="relative"
            @mouseleave="toggleMegaMenu(false)"
            @mouseenter="toggleMegaMenu(true)"
          >
            <span
              class="text-lg cursor-pointer hover:text-orange-500 delay-75 duration-75"
            >
              Products
              <Icon name="teenyicons:down-solid" size="8" color="black" />
            </span>
            <div
              :class="{ 'mega-menu-visible': megaMenuVisible }"
              class="mega-menu absolute left-0 top-full bg-white border-gray-300 shadow-lg z-30"
            >
              <div class="container mx-auto px-2 md:px-5 mt-8">
                <div class="grid grid-cols-4 gap-4 p-4">
                  <div class="">
                    <ul>
                      <li
                        class="font-medium text-lg mb-4"
                        v-for="(cat, index) in catFirstpart"
                        :key="index"
                      >
                        <nuxt-link
                          :to="`/categories/${cat}`"
                          class="hover:text-orange-500 hover:ms-2 transition-all duration-75 capitalize"
                        >
                          <Icon
                            name="bi:arrow-right"
                            size="12"
                            color="black"
                            class="me-1"
                          />
                          {{ cat.replace(/-/g, " ") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <ul>
                      <li
                        class="font-medium text-lg mb-4"
                        v-for="(cat, index) in catSecondpart"
                        :key="index"
                      >
                        <nuxt-link
                          :to="`/categories/${cat}`"
                          class="hover:text-orange-500 transition-colors duration-75 capitalize"
                        >
                          <Icon
                            name="bi:arrow-right"
                            size="12"
                            color="black"
                            class="me-1"
                          />
                          {{ cat.replace(/-/g, " ") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <ul>
                      <li class="relative">
                        <nuxt-link
                          title="Women Dresses"
                          to="/categories/womens-dresses"
                          class="cursor-pointer"
                        >
                          <NuxtImg
                            loading="lazy"
                            src="/menu-product-image/women.jpg"
                            alt="product image1"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>

                        <nuxt-link
                          
                          to="/categories/womens-dresses"
                          class="whitespace-nowrap text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 first-line:text-md font-semibold cursor-pointer"
                          >Women Clothing</nuxt-link
                        >
                      </li>

                      <li class="relative mt-3">
                        <nuxt-link
                          title="Smart Phones"
                          to="/categories/smartphones"
                          class="cursor-pointer"
                        >
                          <NuxtImg
                            loading="lazy"
                            src="/menu-product-image/phones.jpg"
                            alt="Smart Phones"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>

                        <nuxt-link
                          title="Smart Phones"
                          to="/categories/smartphones"
                          class="whitespace-nowrap text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 first-line:text-md font-semibold cursor-pointer"
                          >Smart Phones</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="">
                    <ul>
                      <li class="relative">
                        <nuxt-link
                          title="Mens Shirts"
                          to="/categories/mens-shirts"
                          class="cursor-pointer"
                        >
                          <NuxtImg                          
                            loading="lazy"
                            src="/menu-product-image/man.jpg"
                            alt="Mens Shirts"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>
                        <nuxt-link
                        title="Mens Shirts"
                          to="/categories/mens-shirts"
                          class="whitespace-nowrap text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-semibold cursor-pointer"
                          >Man Clothing</nuxt-link
                        >
                      </li>

                      <li class="relative mt-3">
                        <nuxt-link to="/categories/smartphones" class="cursor-pointer" title="Smart Phones">
                          <NuxtImg
                            loading="lazy"
                            src="/menu-product-image/cameras.jpg"
                            alt="Smart Phones"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>
                        <nuxt-link
                          title="Smart Phones"
                          to="/categories/smartphones"
                          class="whitespace-nowrap text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 first-line:text-md font-semibold cursor-pointer"
                          >Cameras</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <nuxt-link
              to="/blog-posts"
              class="text-lg hover:text-orange-500 delay-75 duration-75"
            >
              Blog
            </nuxt-link>
          </div>

          <div class="">
            <nuxt-link
              to="/contact"
              class="hover:text-orange-500 delay-75 duration-75 text-lg"
              title="Dummy E-Commerce Contact"
            >
              Contact
            </nuxt-link>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="">
            <Icon
              name="mingcute:phone-call-line"
              class="text-tblue"
              size="36"
            />
          </div>

          <div class="">
            <span class="text-sm font-semibold">Hot Line:</span>
            <br />
            <a href="tel:5555555">+90 212 554 65 48</a>
          </div>
        </div>
      </div>
    </div>

    <mobileMenu />
  </nav>
  <cartSideBar />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import mobileMenu from "./mobileMenu.vue";
import topHeader from "./topHeader.vue";
import { useProductsStore } from "~/store/products";
import { useCartStore } from "~/store/cart";
import { useWishlistStore } from "~/store/wishlist";
import cartSideBar from "~/components/layouts/cartSideBar.vue";
import { useAuthStore } from "~/store/auth";

//profile image
const profileImg = computed(() => {
  if (userData.value) {
    return userData.value?.image;
  } else {
    return "/users/male.png";
  }
});

//User Auth Store Initializing
const authStore = useAuthStore();
const { isAuthenticated, userData } = storeToRefs(authStore);
const { logout } = authStore;

//Cart Store
const cartStore = useCartStore();
const { cartList, cartCount } = storeToRefs(cartStore);

//Wish List Store
const wishlistStore = useWishlistStore();
const { wishlist, wishCount } = storeToRefs(wishlistStore);

//Product Store
const productStore = useProductsStore();
const { getAllProductsCat, searchProducts } = productStore;
const { allProductsCat } = storeToRefs(productStore);
const searchInput = ref("");
const router = useRouter();

// fetch all each products category
onMounted(async () => {
  await getAllProductsCat();
});

//search product
const search = async () => {
  await searchProducts(searchInput.value);
  router.push({ path: "/search-result", query: { qr: searchInput.value } });
  searchInput.value = "";
};

const onSubmit = () => {
  search();
};

//mega menu categories first part
const catFirstpart = computed(() => {
  let chunk = Math.ceil(allProductsCat.value.length / 2);

  if (chunk !== 0) {
    return allProductsCat.value.slice(0, chunk);
  }
});

//mega menu categories second part
const catSecondpart = computed(() => {
  let chunk = Math.ceil(allProductsCat.value.length / 2);

  if (chunk !== 0) {
    return allProductsCat.value.slice(chunk);
  }
});

//manage visiblity of mega menu
const megaMenuVisible = ref(false);

const toggleMegaMenu = (param: boolean) => {
  megaMenuVisible.value = param;
};

// Close the mega menu on every route change.
// Although it's possible to detect route changes using watch or watchEffect,
// it can be cumbersome because you need to listen for changes not only in queries but also for dynamic parameters.
router.afterEach((to, from) => {
  toggleMegaMenu(false);
});

import { useCartSideBar } from "~/store/cartSideBar";
const { showSideBar } = useCartSideBar();
</script>

<style scoped>
.mega-menu {
  z-index: 999;
  width: 991px;
  visibility: hidden;
  opacity: 0;
  border-radius: 10px;
  transition-duration: 0.1s;
  transform-origin: top;
  -webkit-transform: perspective(300px) rotateX(-18deg);
  -moz-transform: perspective(300px) rotateX(-18deg);
  -ms-transform: perspective(300px) rotateX(-18deg);
  -o-transform: perspective(300px) rotateX(-18deg);
  transform: perspective(300px) rotateX(-18deg);
}

.mega-menu-visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition-duration: 0.2s;
  -webkit-transform: perspective(300px) rotateX(0deg);
  -moz-transform: perspective(300px) rotateX(0deg);
  -ms-transform: perspective(300px) rotateX(0deg);
  -o-transform: perspective(300px) rotateX(0deg);
  transform: perspective(300px) rotateX(0deg);
}

@media only screen and (max-width: 1280px) {
  .mega-menu {
    width: 800px;
  }
}
</style>
