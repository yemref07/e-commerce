<template>
  <div class="flex flex-row justify-start items-center gap-5">
    <img :src="props.imgSrc" alt="" width="60" class="rounded-full" />
    <div class="p-2">
      <Icon
        name="solar:star-bold"
        size="16"
        class="text-tyellow block"
        v-for="(item, index) in  parseInt(props.rate)"
        :key="index"
      />

      <p class="text-sm font-semibold mt-2">
        {{ name || 'John Doe'}}
        <span class="text-muted text-sm">{{ date }}</span>
      </p>

      <p class="text-sm font-light text-tblack mt-2">
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  rate: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  imgSrc: {
    type: String,
    required: false,
  },
});
</script>

<style lang="css" scoped></style>
