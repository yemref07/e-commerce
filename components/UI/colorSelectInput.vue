<template>
  <div
    :class="{'bg-gray-600': selectedColor === inputColor}"
    class="w-9 h-9 rounded-full relative flex justify-center items-center border-2 cursor-pointer"
  >
    <div class="w-6 h-6 rounded-full absolute" :style="{backgroundColor:inputColor}"></div>
  </div>
</template>

<script setup lang="ts">

const  props  = defineProps({
  inputColor:{
    type:String,
    required:true
  },
  selectedColor:{
    type:String,
    default:false
  }
})


</script>

