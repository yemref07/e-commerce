<template>
  <div class="flex justify-between items-center px-3 py-5 md:px-10 lg:hidden">

    <div class="flex justify-start items-center">
      <nuxt-link to="/" title="Dummy E-Commerce Home Page" class="mr-3">
        <NuxtImg
          loading="lazy"
          src="/logos/mobile-logo.svg"
          alt="Dummy Commerce Mobile Logo"
          width="110"
        />
      </nuxt-link>
      <Icon
        name="pepicons-print:menu"
        size="28"
        class="block text-tblack"
        @click="openMobile"
      />
    </div>


    <div class="flex gap-1">
      <nuxt-link to="/cart">
        <cartIcon :quantity="cartCount" />
      </nuxt-link>

      <WishIcon :quantity="wishCount"/>

      <nuxt-link v-if="isAuthenticated" to="/user-profile" title="user profile">
        <Icon
          name="solar:user-bold-duotone"
          size="28"
          color="black"
          class="cursor-pointer"
        />
      </nuxt-link>

      <nuxt-link v-else to="/signin" title='sign in'>
        <Icon
          name="solar:user-bold-duotone"
          size="28"
          color="black"
          class="cursor-pointer"
        />
      </nuxt-link>

    </div>
  </div>

  <div
    style="z-index: 999"
    class="w-full fixed top-0 left-0 right-0 bg-white h-screen text-black overflow-y-auto scroll-smooth delay-400 transition-transform"
    :class="{
      '-translate-x-full': !mobileVisible,
      'transform-none': mobileVisible,
    }"
  >
    <div class="flex flex-col px-8 py-20 relative">
      <div class="mb-10 flex flex-row justify-between items-center">
        <nuxt-link to="/" title="Dummy E-Commerce Home Page">
          <NuxtImg
      loading="lazy"
            src="/logos/commerce-logo.svg"
            alt="Dummy Commerce Logo"
            width="180"
          />
        </nuxt-link>
        <Icon
          name="ion:search"
          size="26"
          class="block text-tblack"
          @click="openSearchModal"
        />
      </div>

      <div class="">
        <div
          class="bg-torange text-white py-2 px-5 flex items-center justify-between"
          @click="
            () => {
              toggleSubMenu(menuCategory);
            }
          "
        >
          <div class="">
            <Icon name="ion:menu" size="24" class="block text-white mr-2" />
            <span class="font-medium text-lg align-middle"
              >Popular Categories</span
            >
          </div>

          <div class="">
            <Icon
              name="ph:caret-down"
              size="24"
              class="block text-white transition-all duration-75"
              :class="{ 'rotate-180': menuCategory.visibility }"
            />
          </div>
        </div>

        <div class="" :class="{ hidden: menuCategory.visibility }">
          <ul class="pl-5 space-y-3 mt-5 divide-y-2 text-base bg-white">
            <li class="py-1">
              <Icon
                name="pepicons-pencil:smartphone-home-button"
                size="24"
                class="block text-tblack"
              />
              <nuxt-link to="/categories/smartphones" title="Smart Phones">
                <span class="align-bottom ms-2"> Smartphone </span>
              </nuxt-link>
            </li>
            <li class="py-1">
              <Icon
                name="game-icons:intricate-necklace"
                size="24"
                class="block text-tblack"
              />
              <nuxt-link to="/categories/jewellery" title="Jewellery">
                <span class="align-bottom ms-2">Jewellery</span>
              </nuxt-link>
            </li>

            <li class="py-1">
              <Icon
                name="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                size="24"
                class="block text-tblack"
              />
              <nuxt-link to="/categories/mens-shirts" title="Mens Shirts">
                <span class="align-bottom ms-2"> Mens Shirts </span>
              </nuxt-link>
            </li>

            <li class="py-1">
              <Icon
                name="streamline:shopping-catergories-dress-clothing-dress-skirt-women"
                size="24"
                class="block text-tblack"
              />
              <nuxt-link to="/categories/womens-dresses" title="Women Dresses">
                <span class="align-bottom ms-2"> Womens Dresses</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-col space-y-3">
          <div class="border-b-2 py-2">
            <nuxt-link to="/" class="text-lg" title="Home Page">Home</nuxt-link>
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link
              to="/"
              class="text-lg"
              title="Dummy E-Commerce About"
              >About</nuxt-link
            >
          </div>

          <div class="border-b-2 py-2">
            <div
              class="flex justify-between items-center"
              @click="
                () => {
                  toggleSubMenu(menuProduct);
                }
              "
            >
              <nuxt-link to="/" class="text-lg" title="All Categories"
                >All Categories
              </nuxt-link>
              <Icon
                name="raphael:arrowright"
                size="20"
                class="block text-tblack transition-all ease-in duration-200"
                :class="{ 'rotate-90': menuProduct.visibility }"
              />
            </div>

            <ul
              class="pl-5 space-y-3 mt-5 divide-y-2 text-lg"
              :class="{ hidden: !menuProduct.visibility }"
            >
              <li
                v-for="(item, index) in allProductsCat"
                :key="index"
                class="py-1 capitalize text-base"
              >
                <nuxt-link :to="`/categories/${item}`" :title="item">
                  {{ item.replace(/-/g, " ") }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link to="/blog-posts" class="text-lg" title="Dummy E-Commerce Blog"
              >Blog</nuxt-link
            >
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link
              to="/contact"
              class="text-lg"
              title="Dummy E-Commerce Contact"
              >Contact</nuxt-link
            >
          </div>
        </div>
      </div>

      <Icon
        name="material-symbols:close"
        size="24"
        class="absolute text-tblack right-5 top-5"
        @click="closeMobile"
      />

      <div class="flex justify-start items-center mt-6 gap-4">
        <NuxtImg loading="lazy" src="/lang/england.svg" alt="" width="32" class="" />
        <NuxtImg loading="lazy" src="/lang/turkey.svg" alt="" width="32" class="" />
      </div>
    </div>
  </div>
  <div
    :class="{ 'hidden-search': !searchModalVisibility }"
    class="z-1000 fixed transition-all opacity-100 visible duration-75 top-0 left-0 right-0 justify-center items-center w-full h-screen flex flex-col bg-gray-200 gap-5"
  >
    <Icon
      name="material-symbols:close"
      size="24"
      class="absolute text-tblack right-5 top-5"
      @click="() => (searchModalVisibility = false)"
    />
    <nuxt-link to="/" title="Dummy E-Commerce Home Page">
      <NuxtImg
      loading="lazy"
        src="/logos/commerce-logo.svg"
        alt="Dummy Commerce Logo"
        width="250"
      />
    </nuxt-link>

    <input
      ref="searchInput"
      v-model="searchText"
      type="text"
      placeholder="Type Here..."
      class="px-5 rounded-md w-3/4 mt-10 py-4"
    >

    <div
      class="bg-torange text-center text-lg rounded-md text-white py-2 w-3/4"
      @click="search"
    >
      Search Product
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "~/store/products";
import { useCartStore } from "~/store/cart";
import { useAuthStore } from "~/store/auth";
import { useWishlistStore } from "~/store/wishlist";

const mobileVisible = ref(false);
const menuCategory = reactive({ visibility: false });
const menuProduct = reactive({ visibility: false });

const productStore = useProductsStore();
const { searchProducts } = productStore;
const { allProductsCat } = storeToRefs(productStore);
const router = useRouter();
const searchModalVisibility = ref(false);
const searchText = ref("");
const searchInput = ref(null);

const cartStore = useCartStore();
const { cartCount } = storeToRefs(cartStore);

const wishlistStore = useWishlistStore()
const { wishCount} = storeToRefs(wishlistStore)

const authStore = useAuthStore()
const {isAuthenticated} = storeToRefs(authStore)

//search product
const search = async () => {
  await searchProducts(searchText.value);
  router.push({ path: "/search-result", query: { qr: searchText.value } });
  searchText.value = "";
};

// close mobile menu before each route change and navigate
router.beforeEach((to, from) => {
  if (mobileVisible.value === true) {
    mobileVisible.value = false;
  }
  if (searchModalVisibility.value === true) {
    searchModalVisibility.value = false;
  }
  return true;
});

const toggleSubMenu = (param) => {
  param.visibility = !param.visibility;
};

const closeMobile = () => {
  mobileVisible.value = false;
};

const openMobile = () => {
  mobileVisible.value = true;
};

const openSearchModal = () => {
  searchModalVisibility.value = true;

  // Use $nextTick to wait for the DOM to update
  //Its not working ıdk why
  nextTick(() => {
    if (searchInput.value) {
      searchInput.value.focus();
    }
  });
};
</script>

<style scoped>
.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

.hidden-search {
  opacity: 0;
  visibility: hidden;
}

.z-1000 {
  z-index: 1000;
}
</style>
