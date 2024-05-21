<template>
  <div class="label-remember relative">
    <span
      :class="{ 'checkbox-checked checked': isChecked, 'checkbox': !isChecked }"
    />
    <label class="text-sm font-medium text-gray-700 ms-6">{{ label }}</label>
    <span
      class="absolute left-0 right-0 top-0 bottom-0"
      @click="checkInput"
    />
  </div>
</template>

<script setup>

const props = defineProps({
    label:String,
    modelValue:Boolean
})

const isChecked = ref(false)

const checkInput = () => {
    isChecked.value = !isChecked.value
    emit('check',isChecked.value)
}

const emit = defineEmits(['check'])
</script>

<style scoped>
.checkbox-checked {
  position: absolute;
  content: url(/icons/check.svg);
  top: 4px;
  left: 0;
  width: 18px;
  height: 18px;
  line-height: 16px;
  text-align: center;
  visibility: visible;
  opacity: 1;
  color: white;
  transition: all 0.2s 0s ease-out;
  -webkit-transition: all 0.2s 0s ease-out;
  -moz-transition: all 0.2s 0s ease-out;
  -ms-transition: all 0.2s 0s ease-out;
  -o-transition: all 0.2s 0s ease-out;
}

.checked {
  background-color: var(--torange);
  border-color: var(--torange);
}

.checkbox {
  position: absolute;
  content: "";
  top: 4px;
  left: 0;
  width: 18px;
  height: 18px;
  line-height: 16px;
  text-align: center;
  border: 1px solid #c3c7c9;
  z-index: -1;
  -webkit-transition: all 0.2s 0s ease-out;
  -moz-transition: all 0.2s 0s ease-out;
  -ms-transition: all 0.2s 0s ease-out;
  -o-transition: all 0.2s 0s ease-out;
  transition: all 0.2s 0s ease;
}
</style>
