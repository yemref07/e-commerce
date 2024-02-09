<template>
    <div class="flex flex-row border-b py-4 justify-start items-center">
        <div class="hover:scale-105 delay-200 transition-all ">
            <img src="/product-demo-images/product-sm-1.jpg" alt="" class="w-full h-auto rounded-md">
        </div>
        <div class="flex flex-col ml-6">
            <span class="text-muted text-sm">Mobile Phone</span>
            <h3 class="font-semibold text-xl mb-3">Xiomi Note 12 Pro</h3>
            <span class="text-torange font-semibold text-lg">$200.00</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    cat:String,
    title:String,
    img:String,
    price:Number
})


</script>

<style scoped>

</style>