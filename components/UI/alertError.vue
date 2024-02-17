<template>
  <div class="hidden">Alert2 Me</div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  errorCode: {
    type: String,
    required: false,
  },

  confirmBtn: {
    type: String,
    required: true,
    default: "Confirm",
  },

  show: {
    type: Boolean,
    required: true,
    default: false,
  },
});

//define isClose event 
const emit = defineEmits<{
  (event: "isVisible",status:boolean): void;
}>();

const showAlert = () => {
  Swal.fire({
    title: `<strong class='text-red-500'>${
      props.errorCode || "Oppss..."
    }</strong>`,
    icon: "error",
    html: `${props.desc || "Something wrong here"}`,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: `${props.confirmBtn || "Got It"}`,
    cancelButtonAriaLabel: "Thumbs down",
  }).then((result) => {
    // emit status of the modal with that in parent comp we can awere of the modal status
    if (result.isConfirmed) {
      emit('isVisible',true)
    }
    else{
      emit('isVisible',false)
    }
  });
};


// watch passing show props if its true show alert modal if its not close it
watch(
  () => props.show,
  (newValue, oldValue) => {
    if (props.show) {
      showAlert();
    } else {
      Swal.close();
    }
  }
);
</script>

<style lang="css" scoped></style>
