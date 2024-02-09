<template>
    <div>
        <TheHeader />
            <slot />
        <TheFooter />
    </div>
</template>

<script setup>
import TheFooter from '~/components/layouts/TheFooter.vue';
import TheHeader from '~/components/layouts/TheHeader.vue';
</script>

<style  scoped>

</style>