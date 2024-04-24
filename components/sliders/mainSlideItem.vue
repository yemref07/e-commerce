<template>
  <div class="w-full relative" :style="{ backgroundColor: bgColor }">
    <div class="container mx-auto py-4 px-8 md:px-10 lg:px-20 xl:px-32">
      <div class="slide flex flex-col justify-center items-center">
        <div class="grid lg:grid-cols-2">
          <div class="grid-item flex flex-col justify-center">
            <div class="">
              <h1
                class="text-white font-semibold text-xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {{ props.title1 }}
              </h1>
            </div>

            <div class="">
              <h2
                class="text-white font-medium text-2xl mb-10 mt-3 slide-sub-title"
              >
                {{ props.title2 }}
              </h2>
            </div>

            <div class="">
              <nuxt-link
                :to="props.catLink"
                class="bg-white text-black py-2 px-3 md:py-4 md:px-6 rounded-md font-semibold cursor-pointer btn-shop"
              >
                Shop Now
                <Icon name="solar:arrow-right-linear" class="ml-1" size="24" />
              </nuxt-link>
            </div>
          </div>

          <div
            class="grid-item flex justify-start mt-12 lg:mt-0 lg:justify-end items-center"
          >
            <NuxtPicture
              :loading=" props.isPreload ? 'eager' : 'lazy' "
              :preload = "props.isPreload"
              format="webp,avif,jpg"
              :src="props.img"
              :alt="props.title1"
              class="z-20"
              height="auto"
              width="400"
              sizes="sm:180px, md:240px, lg:400px"
              fit="crop"
            />
          </div>
        </div>
      </div>
    </div>

    <NuxtImg
      :loading=" props.isPreload ? 'eager' : 'lazy' "
      :preload = "props.isPreload"
      src="/shape/slider-shape-2.png"
      alt="Shape 2"
      class="absolute opacity-40 top-1/4 left-20"
      width="150"
    />

    <NuxtImg
      :loading=" props.isPreload ? 'eager' : 'lazy' "
      :preload = "props.isPreload"
      src="/shape/slider-shape-1.png"
      alt="Shape 1"
      class="absolute grayscale opacity-20 top-0 right-0"
      width="700"
    />
    <NuxtImg
      :loading=" props.isPreload ? 'eager' : 'lazy' "
      :preload = "props.isPreload"
      src="/shape/slider-shape-4.png"
      alt="Shape 4"
      class="absolute grayscale opacity-20 top-0 right-28"
      width="600"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title1: String,
  title2: String,
  img: String,
  bgColor: String,
  catLink: String,
  isPreload:Boolean
});
</script>

<style scoped>
.slide {
  height: 70vh;
}

.slide-sub-title {
  font-family: "Oregano Regular";
}

.btn-shop:hover {
  background-color: var(--tgreen);
  box-shadow: 0 0 0 1px white;
  color: white;
  transition: 0.3s;
}

.grid-item {
  position: relative;
}
</style>
