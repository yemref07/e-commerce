<template>
  <div class="flex flex-col relative cursor-pointer">
    <Icon name="gala:bag" size="26" class="block mr-5 text-tblack relative" />
    <span
      class=" text-white text-xs font-semibold px-2 py-1 rounded-full absolute badge"
      >{{props.quantity || 0 }}</span
    >
  </div>
</template>

<script setup>
const router = useRouter()

const props = defineProps({
  quantity:{
    type:Number,
    required:true,
    default:1
  }
})
</script>

<style scoped>
.badge{
    left: 40%;
    top: -15%;
    background-color: var(--torange);
}
</style>
