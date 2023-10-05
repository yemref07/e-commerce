<template>
  <div
    class="flex flex-col bg-white py-6 px-6 gap-5 relative"
    @mouseenter="
      () => {
        hoverTool(true);
      }
    "
    @mouseleave="
      () => {
        hoverTool(false);
      }
    "
  >
    <div class="border-b-2 relative">
      <img :src="props.img" alt="" class="w-full h-auto" />
      <button
        class="bg-tblack text-white d-block py-2 w-full btn-add"
        :class="{ 'btn-add-hover': hover }"
      >
        Add To Cart
      </button>
    </div>

    <div class="">
      <span class="text-slate-600">{{ props.cat }}</span>
      <h3 class="text-lg font-medium">
        {{ props.title }}
      </h3>
      <h4 class="mt-2">
        <span class="line-through text-muted mr-2 text-sm">700$</span>
        <span class="font-semibold text-xl text-tpink">
          {{ props.price }}$
        </span>
      </h4>
      <div class="grid grid-cols-4 gap-5 mt-5">
        <div class="border-2 border-gray-200 px-4 py-2 flex flex-col items-center justify-center">
          <p class="text-lg">
            {{ countDown.days }}
          </p>
          <p class="text-muted text-sm">Days</p>
        </div>
        <div class="border-2 border-gray-200 px-4 py-2 flex flex-col items-center justify-center">
          <p class="text-lg">
            {{ countDown.hours }}
          </p>
          <p class="text-muted text-sm">Hours</p>
        </div>
        <div class="border-2 border-gray-200 px-4 py-2 flex flex-col items-center justify-center">
          <p class="text-lg">
            {{ countDown.min }}
          </p>
          <p class="text-muted text-sm">Minutes</p>
        </div>
        <div class="border-2 border-gray-200 px-4 py-2 flex flex-col items-center justify-center">
          <p class="text-lg">
            {{ countDown.seconds }}
          </p>
          <p class="text-muted text-sm">Seconds</p>
        </div>
  
      </div>
    </div>
    <productTool :hover="hover" productID="lorem" />
  </div>
</template>

<script setup>
import productTool from "./productTool.vue";
const props = defineProps({
  cat: String,
  title: String,
  img: String,
  price: Number,
});

const hover = ref(false);

const hoverTool = (param) => {
  hover.value = param;
};

const countDown = ref({
  countDownDate: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, //7 Days
  days: 0,
  hours: 0,
  min: 0,
  seconds: 0,
  intervalID: null,
});

onMounted(() => {
  countDown.value.intervalID = setInterval(updateCountDown, 1000);
});

onBeforeUnmount(() => {
  clearInterval(countDown.value.intervalID)
})

const updateCountDown = () => {
  const now = new Date().getTime();
  const timeRemaining = countDown.value.countDownDate - now;
  if (timeRemaining <= 0) {
    //Count down reach zero
    clearInterval(countDown.value.intervalID);
  } 
  else {
    countDown.value.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    countDown.value.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countDown.value.min = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    countDown.value.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  }
};

</script>

<style scoped>
.btn-add {
  visibility: hidden;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s 0s ease-out;
}

.btn-add-hover {
  visibility: visible !important;
  opacity: 1 !important;
  bottom: -10px !important;
}

.btn-add:hover {
  background-color: var(--torange);
  color: white;
}
</style>
