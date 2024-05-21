<template>
  <div class="flex flex-row justify-start items-center gap-5">
    <NuxtImg
      provider="dummy"
      loading="lazy"
      :src="props.imgSrc"
      alt=""
      width="60"
      class="rounded-full"
    />
    <div class="p-2">
      <Icon
        v-for="(item, index) in parseInt(props.rate)"
        :key="index"
        name="solar:star-bold"
        size="16"
        class="text-tyellow block"
      />

      <Icon
        v-for="(item, index) in emptyStars"
        :key="index"
        name="solar:star-bold"
        size="16"
        class="block text-gray-300"
      />

      <p class="text-sm font-semibold mt-2">
        {{ name || "John Doe" }}
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

//Calc Empty Start
const emptyStars = computed(() => {
  return 5 - parseInt(props.rate);
});
</script>

<style lang="css" scoped></style>
