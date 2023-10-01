<template>
  <topHeader />
  <!-- main nav -->
  <nav>
    <div class="container mx-auto px-5 lg:px-10 xl:px-10 2xl:px-20 hidden md:block">
      <div class="flex py-5 items-center justify-between">
        <div class="basis-1/4 lg:basis-1/3">
          <img
            src="/logos/commerce-logo.svg"
            alt=""
            class="w-32 lg:w-40 xl:w-56"
          />
        </div>

        <div class="basis-2/4 lg:basis-1/3">
          <form>
            <div
              class="flex flex-nowrap border-2 border-sky-800 justify-between items-center py-1 px-2 xl:py-2 xl:px-4"
            >
              <div class="basis-2/4 text-sm items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  class="text-black focus:outline-none w-full"
                  placeholder="Search For Products"
                />
              </div>

              <div class="basis-2/4 grow">
                <div
                  class="flex justify-end items-center flex-nowrap flex-grow"
                >
                  <div class="relative">

                    <ul class="absolute bg-white px-3 py-2 space-y-2 hidden">
                      <li class="font-medium mb-2">Select Category</li>
                      <li>Mobile</li>
                      <li>Digital Watch</li>
                      <li>Digital Watch</li>
                      <li>Digital Watch</li>
                    </ul>
                  </div>

                  <div class="">
                    <button
                      type="button"
                      class="text-white bg-torange px-2 py-1 lg:px-2 lg:py-1 rounded-md"
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
              <Icon
                name="iconamoon:profile-thin"
                size="32"
                color="black"
                class="ms-10 mr-3"
              />
            </div>

            <div class="hidden xl:flex flex-col mr-10">
              <nuxt-link to="/sign-in" class="cursor-pointer">
                <span class="line-clamp-1">Hello, Sign In</span>
                <h3 class="font-semibold">Your Account</h3>
              </nuxt-link>
            </div>

            <div class="flex space-x-2">
              <div class="">
                <Icon
                  name="ph:arrows-down-up-thin"
                  size="32"
                  color="black"
                  class="block"
                />
              </div>
              <div class="">
                <Icon name="mdi:heart" size="32" color="red" class="block" />
              </div>
              <div class="">
                <Icon name="gala:bag" size="32" color="black" class="block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-5 lg:px-10 xl:px-10 2xl:px-20 hidden md:block">
      <div class="flex flex-row items-center justify-between border-t-2 py-3">
        <div class="flex flex-item space-x-5 lg:space-x-10 relative">
          <div class="">
            <nuxt-link to="/" class="text-lg"> Home </nuxt-link>
          </div>

          <div class="">
            <nuxt-link to="/" class="text-lg"> About </nuxt-link>
          </div>

          <div class="relative" @mouseleave="toggleVisible">
            <nuxt-link to="" class="text-lg cursor-pointer" @mouseenter="toggleVisible">
              Products
              <Icon name="teenyicons:down-solid" size="8" color="black" />
            </nuxt-link>
            <div
              :class="{ 'mega-menu-visible': menuVisible }"
              class="mega-menu absolute left-0 top-full bg-white border-gray-300 shadow-lg z-30"
            >
              <div class="container mx-auto px-5">
                <div class="grid grid-cols-4 gap-4 p-4">
                  <div class="">
                    <h2 class="font-semibold text-lg mb-2 border-b-2 pb-2 lg:w-2/3">Category 1</h2>
                    <ul>
                      <li>
                        <nuxt-link to="">Product 1</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 2</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 3</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 4</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 5</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 6</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="">
                    <h2 class="font-semibold text-lg mb-2 border-b-2 pb-2 lg:w-2/3">Category 2</h2>
                    <ul>
                      <li>
                        <nuxt-link to="">Product 1</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 2</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 3</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 4</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 5</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link to="">Product 6</nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <div class="">
                    <ul>
                      <li class="relative">
                        <nuxt-link to="" class=" cursor-pointer">
                          <img
                            src="/menu-product-image/menu-product-img-1.jpg"
                            alt="product image1"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>
                        <nuxt-link
                          to=""
                          class="text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/4 text-md font-semibold cursor-pointer"
                          >Phones</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="relative">
                    <ul>
                      <li>
                        <nuxt-link to="/" class=" cursor-pointer">
                          <img
                            src="/menu-product-image/menu-product-img-2.jpg"
                            alt="product image 2"
                            class="w-full h-auto rounded-md"
                          />
                        </nuxt-link>
                        <nuxt-link
                          to="/"
                          class="text-white bg-tpurple px-6 py-1 rounded-lg absolute top-3/4 left-1/4 text-md font-semibold cursor-pointer"
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
            <nuxt-link to="/" class="text-lg"> Blog </nuxt-link>
          </div>

          <div class="">
            <nuxt-link to="/" class="text-lg"> Contact </nuxt-link>
          </div>
        </div>

        <div class="flex-item flex items-center">
          <div class="mr-3">
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

</template>

<script setup>
const menuVisible = ref(false);

const toggleVisible = () => {
  menuVisible.value = !menuVisible.value;
};
</script>

<style scoped>


.mega-menu {
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

.mega-menu li {
  line-height: 34px;
  font-size: 14px;
  font-weight: 400;
}

@media only screen and (max-width: 1280px) {
  .mega-menu {
    width: 800px;
  }
}
</style>
