<template>
    <div class="flex flex-col relative cursor-pointer" @click="goWishlistPage">
      <Icon name="mdi:heart" size="26" class="block mr-5  relative text-tblack " />
      <span
        class=" text-white text-xs font-semibold px-2 py-1 rounded-full absolute badge"
        >{{props.quantity || 0 }}</span
      >
    </div>
  </template>
  
  <script setup>
const props = defineProps({
  quantity:{
    type:Number,
    required:true,
    default:1
  }
})

const router = useRouter()

  const goWishlistPage = () => {
    router.push({path:"/wishlist"})
  }

  </script>
  
  <style scoped>
  .badge{
      left: 40%;
      top: -15%;
      background-color: var(--torange);
  }
  </style>
  