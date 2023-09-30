<template>
     <div class="w-full" :style="{backgroundColor:backgroundColor}">
        <div class="container mx-auto px-10 lg:px-20 xl:px-40" >
          <div class="slide flex flex-col justify-center items-center">
            <div class="grid lg:grid-cols-2">
  
              <div class="grid-item flex flex-col justify-center">
  
                <div class="">
                  <h1 class="text-white font-semibold text-6xl">
                    {{props.title1}}
                  </h1>
                </div>
  
                <div class="">
                  <h2
                    class="text-white font-medium text-3xl mb-10 mt-3 slide-sub-title"
                  >
                   {{props.title2}}
                  </h2>
                </div>
  
                <div class="">
                  <nuxt-link
                    :to="props.catLink"
                    class="bg-white text-black py-4 px-6 rounded-md font-semibold cursor-pointer btn-shop"
                  >
                    Shop Now
                    <Icon
                      name="solar:arrow-right-linear"
                      class="ml-1"
                      size="24"
                    />
                  </nuxt-link>
                </div>
  
              </div>
  
              <div class="grid-item flex justify-end items-center">
                <img
                  :src="props.img"
                  alt=""
                  class="w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
const backgroundColor = ref(null);

const props = defineProps({
    title1:String,
    title2:String,
    img:String,
    bgColor:String,
    catLink:String
})

const setBgColor = (color) => {
backgroundColor.value = color
}

onMounted(() => {
  setBgColor(props.bgColor)
})

</script>

<style scoped>
.slide {
  height: 70vh;
}

.slide-sub-title {
  font-family: "Oregano Regular";
}

.btn-shop:hover {
  background-color: var(--tgreen);
  box-shadow: 0 0 0 1px white;
  color: white;
  transition: 0.3s;
}

.grid-item{
  position: relative;
}
</style>
