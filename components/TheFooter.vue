<template>
  <container class="mt-10">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-5 py-20 gap-10 md:gap-14 lg:gap-5 w-full"
    >
      <div class="lg:col-span-2">
        <img src="/logos/commerce-logo.svg" alt="" width="240" class="mb-5" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          dignissimos ipsam quidem.
        </p>
        <div class="block mt-5 space-x-3">
          <a href="/">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:facebook-fill" size="28" />
            </div>
          </a>
          <a href="/">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:twitter-fill" size="28" />
            </div>
          </a>

          <a href="">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:instagram-fill" size="28" />
            </div>
          </a>

          <a href="">
            <div class="p-2 footer-icon inline-block rounded-md">
              <icon name="ri:youtube-fill" size="28" />
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <h2 class="mb-5 text-2xl font-semibold">Categories</h2>
        <ul class="space-y-3">
          <li>
            <nuxt-link to="/">Category 1</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Category 2</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Category 3</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Category 4</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Category 5</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="">
        <h2 class="mb-5 text-2xl font-semibold">Infomation</h2>
        <ul class="space-y-3">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Abount</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Terms And Condition</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Contact</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="">
        <h2 class="mb-5 text-lg md:text-xl lg:text-2xl font-semibold">
          Talk To Us
        </h2>
        <ul class="space-y-3">
          <li>
            <a href="tel:">
              Got Questions? Call us
              <h4
                class="font-semibold text-torange text-md lg:text-xl xxl:text-2xl mt-2"
              >
                +90 534 400 76 52
              </h4>
            </a>
          </li>
          <li>
            <a href="mailto:">
              <icon name="ph:envelope-light" size="28" class="text-tblack" />
              info@dummy.com
            </a>
          </li>
          <li>
            <a href="mailto:">
              <icon
                name="system-uicons:location"
                size="28"
                class="text-tblack"
              />
              Lorem ipsum dolor.
            </a>
          </li>
        </ul>
      </div>
    </div>
  </container>
</template>

<script setup>
import container from "./UI/container.vue";
</script>

<style scoped>
.footer-icon {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: var(--tblack);
  opacity: 0.8;
}

.footer-icon:hover {
  box-shadow: rgba(0, 0, 0, 0.301) 0px 7px 29px 0px;
}
</style>
