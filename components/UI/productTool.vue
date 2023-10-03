<template>
    <div class="flex flex-col border toolbox rounded-md  items-center  justify-center" :class="{'toolbox-hover': hover}">

        <div class="tool border-b-2 p-2">
            <Icon name="clarity:shopping-cart-line" class="" size="28" />
        </div>

        <div class="tool border-b-2 p-2">
            <Icon name="ph:heart" class="" size="28" />
        </div>
        
        <div class="tool p-2">
            <nuxt-link to="">
                <Icon name="solar:eye-broken" class="" size="28" />
            </nuxt-link>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    productID:String,
    hover:Boolean
})

</script>

<style scoped>
.toolbox{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.toolbox{
    position: absolute;
    right: -5px;
    bottom: 50%;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s 0s ease-out;
}

.tool{
    color: var(--tblack);
    cursor: pointer;
    transition: all 0.2s 0s ease-out;
}

.tool:hover{
    background-color: var(--torange);
    color: whitesmoke;
}

.toolbox-hover{
    right: 10px !important;
    visibility: visible !important;
    opacity: 1 !important;
}

</style>