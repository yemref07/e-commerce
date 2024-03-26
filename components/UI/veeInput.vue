<template>
  <div class="relative">
    <label :for="name" class="input-label text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      class="border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-2"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },

  errorMessage:{
    type:String,
    default:""
  },
  placeholder: {
    type: String,
    default: "",
  },

  
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
const name = toRef(props, "name");

// we don't provide any rules here because we are using form-level validation
const {
  //errorMessage,
  value: inputValue,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
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
