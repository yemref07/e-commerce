<template>
  <div class="relative">
    <label class="input-label text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <input
      :value="modelValue"
      :type="inputType"
      class="border border-gray-200 text-tblack text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 block w-full p-4 "
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>

<script setup>
const props = defineProps({
  inputType: String,
  placeholder: String,
  label: String,
  modelValue: String,
});
</script>

<style scoped>
.input-label {
  position: absolute;
  left: 5%;
  top: -15%;
  background: white;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
