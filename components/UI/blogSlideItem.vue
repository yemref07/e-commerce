<template>
  <div class="flex flex-col gap-5 justify-center">
    <div class="relative">
        <nuxt-link to="/">
            <img :src="img" alt="" class="w-full h-auto rounded-md" />
        </nuxt-link>
        <span class="bg-tblack text-white px-6 py-2 absolute left-0 top-0">10 Sep 2023</span>
    </div>

    <div class="">
      <nuxt-link to="/">
        <h3 class="text-tblack text-2xl mb-2 font-semibold hover:text-orange-600 transition-all delay-50">
          {{ title }}
        </h3>
      </nuxt-link>
      <span class="text-muted">
        <Icon name="ph:tag-light" class="text-torange" size="20" />
        {{ tag }}</span
      >
      <p class="mt-3">{{ shortDecs }}...</p>
      <nuxt-link
        to="/"
        class="bg-white border-2 mt-3 rounded-md inline-block border-slate-200 px-6 py-2 hover:bg-orange-500 hover:text-white transition-all delay-75 hover:border-orange-500"
      >
        Read More
        <Icon name="system-uicons:arrow-right" class="" size="24" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  tag: String,
  desc: String,
  ID: Number,
  img: String,
});

const shortDecs = computed(() => {
  return props.desc.substring(0, 100);
});
</script>

<style scoped></style>
