<template>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
    <div
        v-for="(item, index) in posts" :key="index"
      class="relative cursor-pointer"
      @mouseenter="
        () => {
          hover(item.id,true);
        }
      "
      @mouseleave="
        () => {
          hover(item.id,false);
        }
      "
    >
      <img
        :src="item.img"
        alt=""
        class="rounded-md w-full h-auto"
      />

      <div
        class="insta-icon border border-white rounded-md p-2 z-20"
        :class="{ 'insta-icon-hover': isHover[item.id] }"
      >
        <icon name="mdi:instagram" class="text-white" size="24" />
      </div>

      <div class="overlay"></div>
    </div>
  </div>
</template>

<script setup>
const isHover = ref({});
const posts = ref([
  {
    id: "p1",
    img: "/insta-post/instagram-1.jpg",
  },
  {
    id: "p2",
    img: "/insta-post/instagram-2.jpg",
  },
  {
    id: "p3",
    img: "/insta-post/instagram-3.jpg",
  },
  {
    id: "p4",
    img: "/insta-post/instagram-4.jpg",
  },
  {
    id: "5",
    img: "/insta-post/instagram-5.jpg",
  },
]);

const hover = (id,param) => {
  isHover.value[id] = param;
  console.log(isHover.value)
};

</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.391);
  z-index: 10;
}

.insta-icon {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s 0s ease-out;
}

.insta-icon-hover {
  top: 50%;
  visibility: visible;
  opacity: 1;
}
</style>
