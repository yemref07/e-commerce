<template>
  <div class="flex flex-col gap-5 justify-center">
    <div class="relative">
      <nuxt-link :to="`/blog-posts/${props.title}`">
        <NuxtImg
          loading="lazy"
          :src="props.img || '/blog-demo-images/place-holder.webp'"
          :alt="props.title || 'Demo' "
          class="rounded-md"
          width="384"
          sizes="sm:220px, md:300px, lg:380px"
        />
      </nuxt-link>
      <span class="bg-tblack text-white px-6 py-2 absolute left-0 top-0"
        >10 Sep 2023</span
      >
    </div>

    <div class="">
      <nuxt-link :to="`/blog-posts/${props.title}`" :title="props.title || 'Dummy E-Commerce Blog'">
        <h3
          class="text-tblack text-xl lg:text-xl xl:text-2xl mb-2 font-semibold hover:text-orange-600 transition-all delay-50"
        >
          {{ title }}
        </h3>
      </nuxt-link>
      <span class="text-muted">
        <Icon name="ph:tag-light" class="text-torange" size="20" />
        {{ tag  || 'Demo'}}</span
      >
      <p class="mt-3">{{ shortDecs || 'Demo' }}...</p>
      <nuxt-link
        :title="props.title || 'Dummy E-Commerce Blog'"
        :to="`/blog-posts/${props.title}`"
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
  if(props.desc){
    return props.desc.substring(0, 100);
  }
});
</script>

<style scoped></style>
