<template>
  <container class="lg:mt-20 md:mt-10 mt-6">
    <div
      class="flex flex-col justify-center align-baseline"
      :class="{
        'items-center': alignment === 'center',
        'items-baseline': alignment === 'baseline',
      }"
    >
      <div
        :class="{
          'text-start': alignment === 'baseline',
          'text-center': alignment === 'center',
        }"
      >
        <h1 class="text-tblack font-semibold text-xl md:text-2xl lg:text-4xl">
          {{ title }}
        </h1>
        <p class="text-muted text-lg capitalize">
          <nuxt-link to="/" title="Home" class="hover:text-orange-500"
            >Home</nuxt-link
          >
          - {{ formattedSubtitle }}
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


// remove - char from subtitle
const formattedSubtitle = computed(() => {
  return props.subtitle.replace(/-/g, " ");
});

</script>

<style scoped></style>
