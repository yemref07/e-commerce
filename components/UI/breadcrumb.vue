<template>
  <container class="mt-20">
    <div
      class="flex flex-col justify-center align-baseline"
      :class="{
        'items-center': alignment === 'center',
        'items-baseline': alignment === 'baseline',
      }"
    >
      <div :class="{'text-start': alignment === 'baseline','text-center': alignment === 'center'}">
        <h1 class="text-tblack font-semibold text-xl md:text-2xl lg:text-4xl">
          {{ title }}
        </h1>
        <p class="text-muted text-lg">
          <nuxt-link to="/" title="Home" class="hover:text-orange-500"
            >Home</nuxt-link
          >
          - {{ subtitle }}
        </p>
      </div>
    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
const props = defineProps({
  title: {
    type: String,
    default: "Page Title",
    required: true,
  },
  subtitle: {
    type: String,
    default: "Page Subtitle",
    required: true,
  },
  alignment: {
    type: String,
    default: "baseline",
    required: true,
  },
});
</script>

<style scoped></style>
