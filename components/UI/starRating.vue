<template>
  <Icon
    name="solar:star-bold"
    size="24"
    class="inline-block hover:text-yellow-500"
    v-for="(item, index) in 5 "
    :class="{'text-yellow-500': item <= rateData.rate,'text-muted': rateData.rate < item }"
    @click="emitRate(item)"
    @mouseover="setRate(item)"
    @mouseout="resetRating()"
    :key="index"
  />
</template>

<script setup lang="ts">
const rateData = ref({
    rate:0,
    isConfirmed:false
})

const emit = defineEmits<{
  (event: 'starRate', rate: number): void
}>()

const emitRate = (param:number):void => {
    emit('starRate',param)
    rateData.value.rate = param;
    rateData.value.isConfirmed = true
}

const setRate = (param:number):void => {
    rateData.value.rate = param
}

const resetRating = () => {
   if(!rateData.value.isConfirmed){
    rateData.value.rate = 0
   }
}

</script>

<style lang="scss" scoped></style>
