<template>
  <div class="flex justify-between items-center px-3 py-5 md:px-10 md:hidden">
    <div class="">
      <img src="/logos/commerce-logo.svg" alt="" width="150" />
    </div>
    <div class="flex">
      <cart />
      <Icon
        name="ep:menu"
        size="32"
        class="block text-tblack"
        @click="openMobile"
      />
    </div>
  </div>

  <div
    class="w-full fixed top-0 left-0 right-0 bg-white h-screen text-black overflow-y-auto scroll-smooth delay-400 transition-transform z-30"
    :class="{
      '-translate-x-full': !mobileVisible,
      'transform-none': mobileVisible,
    }"
  >
    <div class="flex flex-col px-8 py-20 relative">
      <div class="mb-10">
        <img src="/logos/commerce-logo.svg" alt="" width="220" />
      </div>

      <div class="">
        <div
          class="bg-tpink text-white py-2 px-5 flex items-center justify-between"
          @click="
            () => {
              toggleSubMenu(menuCategory);
            }
          "
        >
          <div class="">
            <Icon name="ion:menu" size="32" class="block text-tblack mr-2" />
            <span class="font-medium text-xl align-bottom">All Categories</span>
          </div>

          <div class="">
            <Icon name="mdi:menu-down" size="32" class="block text-tblack" />
          </div>
        </div>

        <div class="" :class="{ hidden:menuCategory.visibility }">
          <ul class="pl-5 space-y-3 mt-5 divide-y-2 text-lg bg-white">
            <li class="py-1">
              <Icon
                name="solar:camera-broken"
                size="32"
                class="block text-tblack"
              />
              <span class="align-bottom"> Cameras </span>
            </li>

            <li class="py-1">
              <Icon
                name="game-icons:intricate-necklace"
                size="32"
                class="block text-tblack"
              />
              <span class="align-bottom"> Jewelery </span>
            </li>

            <li class="py-1">
              <Icon
                name="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                size="32"
                class="block text-tblack"
              />
              <span class="align-bottom"> Mans Clothing </span>
            </li>

            <li class="py-1">
              <Icon
                name="streamline:shopping-catergories-dress-clothing-dress-skirt-women"
                size="32"
                class="block text-tblack"
              />
              <span class="align-bottom"> Women Clothing </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-col space-y-3">
          <div class="border-b-2 py-2">
            <nuxt-link to="/" class="text-xl">Home</nuxt-link>
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link to="/about" class="text-xl">About</nuxt-link>
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
              <nuxt-link to="/products" class="text-xl"
                >Trend Products
              </nuxt-link>
              <Icon
                name="raphael:arrowright"
                size="28"
                class="block text-tblack transition-all ease-in duration-200"
                :class="{ 'rotate-90': menuProduct.visibility }"
              />
            </div>

            <ul
              class="pl-5 space-y-3 mt-5 divide-y-2 text-lg"
              :class="{ 'hidden': !menuProduct.visibility }"
            >
              <li class="py-1">Category 1</li>
              <li class="py-1">Category 2</li>
              <li class="py-1">Category 3</li>
              <li class="py-1">Category 4</li>
              <li class="py-1">Category 5</li>
              <li class="py-1">Category 6</li>
            </ul>
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link to="/blog" class="text-xl">Blog</nuxt-link>
          </div>

          <div class="border-b-2 py-2">
            <nuxt-link to="/contact" class="text-xl">Contact</nuxt-link>
          </div>
        </div>
      </div>

      <Icon
        name="material-symbols:close"
        size="32"
        class="absolute text-tblack right-5 top-5"
        @click="closeMobile"
      />
    </div>
  </div>
</template>

<script setup>
const mobileVisible = ref(false);
// const menuProduct = ref(false);
// const menuCategory = ref(false);

const menuCategory = reactive({visibility:false});
const menuProduct  = reactive({visibility:false});

const toggleSubMenu = (param) => {
  param.visibility = !param.visibility;
};

const closeMobile = () => {
  mobileVisible.value = false;
};

const openMobile = () => {
  mobileVisible.value = true;
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
</style>
