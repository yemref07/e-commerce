<template>
  <div  class="" @click="showNotification()">Alert notification</div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits<{
  (event: "isVisible", status: boolean): void;
}>();

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// Display notification alert modal
const showNotification = () => {
  Toast.fire({
    icon: "success",
    title: props.title,
    timerProgressBar: true,
    didClose: () => {
      emit("isVisible",false)
    }
  })
};

// watch passing show props if its true show alert modal if its not close it
watch(
  () => props.show,
  (newValue, oldValue) => {
    if (props.show) {
      showNotification();
      console.log('asdasd')
    } 
    else {
      Toast.close();
      emit("isVisible",false)
    }
  }
);
</script>

<style lang="css" scoped></style>
