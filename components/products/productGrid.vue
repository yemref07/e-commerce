<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        <div class="flex flex-col">
            <div class="mb-5">
                <h2 class="text-xl font-semibold">Discount Products</h2>
            </div>
            <productGridItem />
        </div>

        <div class="flex flex-col">
            <div class="mb-5">
                <h2 class="text-xl font-semibold">Discount Products</h2>
            </div>
            <productGridItem />
        </div>
        
        <div class="flex flex-col">
            <div class="mb-5">
                <h2 class="text-xl font-semibold">Discount Products</h2>
            </div>
            <productGridItem />
        </div>



    </div>
</template>

<script setup>
import productGridItem from './productGridItem.vue';

</script>

<style  scoped>

</style>