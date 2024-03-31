<template>
  <div class="hidden lg:block">
    <div class="w-full bg-header-top relative z-10">
      <div class="container mx-auto xl:px-40 text-white">
        <div class="flex py-1 justify-between">
          <div class="flex gap-3 items-center basis-2/4">
            <Icon name="mdi:truck-outline" color="orange" size="24" />
            <p class="text-sm">Free Express Shipping On Orders $400+</p>
          </div>

          <div class="flex space-x-5 items-center basis-2/4 justify-end divide-x">

            <div class="px-2 relative">
              <div class=" cursor-pointer" @click="() => {
                toggleMenu(langMenu)
              }">
                <span class="mr-2">
                  <NuxtImg loading="lazy" src="/lang/england.svg" alt="" width="18" class=" inline-block mr-1" />
                    English
                </span>
                <Icon name="teenyicons:down-solid" size="12" color="white" />
              </div>

              <div :class="{ hidden: !langMenu.visibility }"
                class="absolute top-full bg-white text-black px-4 py-3 mt-1 rounded-sm shadow-md sub-menu">
                <ul class="space-y-2">
                  <li>
                    <NuxtImg loading="lazy" src="/lang/england.svg" alt="English" width="24"
                      class="inline-block mr-2" />
                    <nuxt-link to="/">English</nuxt-link>
                  </li>

                  <li>
                    <NuxtImg loading="lazy" src="/lang/turkey.svg" alt="Turkish" width="24" class="inline-block mr-2" />
                    <nuxt-link to="/wishlist">Turkish</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="px-6 relative">
              <div class="cursor-pointer" @click="() => {
                  toggleMenu(profileMenu);
                }
                ">
                <span class="mr-2">Settings</span>
                <Icon name="teenyicons:down-solid" size="12" color="white" />
              </div>
              <div :class="{ hidden: !profileMenu.visibility }"
                class="absolute top-full bg-white text-black px-4 py-3 right-3 mt-1 rounded-sm shadow-md sub-menu">
                <ul>
                  <li>
                    <nuxt-link to="/user-profile">My Profile</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/wishlist">Wishlist</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/cart">Cart</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">Logout</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const profileMenu = reactive({ visibility: false });
const langMenu = reactive({ visibility: false });

const toggleMenu = (param) => {
  param.visibility = !param.visibility;
};
</script>

<style scoped>
.bg-header-top {
  background-color: #010f1c;
}

.sub-menu a:hover {
  color: var(--tblue);
  cursor: pointer;
}

.sub-menu {
  width: 120px;
}
</style>
