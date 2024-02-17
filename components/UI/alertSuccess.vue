<template>
  <div  class="hidden">Alert Success</div>
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
  (event: "isVisible", status: boolean): void;
}>();

const showSuccess = () => {
  let timerInterval: any;
  Swal.fire({
    title: `${props.title}`,
    html: `${props.desc}`,
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {},
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {

    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("closed by timer",result);
      emit('isVisible',false)
    }

    if(result.isConfirmed){
      emit('isVisible',false)
      console.log("confirmed",result);
    }


  });
};


// watch passing show props if its true show alert modal if its not close it
watch(
  () => props.show,
  (newValue, oldValue) => {
    if (props.show) {
      showSuccess();
    } else {
      Swal.close();
    }
  }
);
</script>

<style scoped></style>
