<template>
  <div class="flex bg-slate-100 px-5 py-8">
    <div class="">
      <Icon :name="iconName" class="text-torange mr-5" :size="iconSize" />
    </div>
    <div class="">
      <h4 class="font-semibold lg:text-lg">{{title}}</h4>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script setup>
const props =  defineProps({
    iconName:String,
    title:String,
    desc:String,
    iconSize:String
})

</script>

<style scoped></style>
