<template>
    <div class="flex flex-col justify-center items-center gap-5">

        <div class="flex flex-col justify-center items-center cat-circle rounded-full">
            <nuxt-link :to="link" class="cursor-pointer" :title="props.title">
                <NuxtImg loading="lazy":src="img" alt="Product Category 1" width="78" :alt="props.title" />
            </nuxt-link>
        </div>

        <div class="text-center">
            <nuxt-link :to="link" class="cursor-pointer" :title="props.title">
                <h3 class="font-semibold text-xl">{{ title }}</h3>
                <p>{{ productStock }} Products</p>
            </nuxt-link>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    title:String,
    productStock:String,
    img:String,
    link:String
})

</script>

<style  scoped>
.cat-circle{
    background-color: #e9f4ff;
    height: 180px;
    width: 180px;
}

</style>