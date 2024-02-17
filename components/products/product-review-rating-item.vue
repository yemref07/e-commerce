<template>
  <div class="flex flex-row justify-start items-center gap-4">
    <span class="text-muted text-sm">{{ title }}</span>
    <div class="bg-gray-200 h-3 w-64">
      <span
        class="bg-yellow-500 h-3 block"
        :style="{ width: rateBarWidth }"
      ></span>
    </div>
    <span class="text-muted text-sm">{{ rateAmount }} Review</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  starRate: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rateAmount: {
    type: String,
    required: true,
  },
});

const rateBarWidth = computed(() => {
  return (parseInt(props.starRate) / 5) * 100 + "%";
});
</script>

<style lang="css" scoped></style>
