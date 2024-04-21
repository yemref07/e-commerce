<template>
  <Breadcrumb title="Keep In Touch With Us" subtitle="Contact" />
  <container class="mt-10">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 xl:gap-20 lg:px-12 xl:px-16">

      <div class="col-span-1 lg:col-span-3 flex flex-col gap-5">
        <div class="">
          <h2 class="font-semibold text-xl md:text-2xl xl:text-2xl mb-5">
            Sent A Message
          </h2>
        </div>
        <customInput
          inputType="text"
          placeholder="Name Surname"
          label="Your Name"
          v-model="form.nameSurname"
        />
        <customInput
          inputType="email"
          placeholder="demo@email.com"
          label="Your Email"
          v-model="form.email"
        />
        <customInput
          inputType="text"
          placeholder="Write your subject"
          label="Subject"
          v-model="form.subject"
        />

        <div class="relative mt-5">
          <label class="textarea-label text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            class="border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4 py-12"
            type="text"
            placeholder="Write your message here..."
            v-model="form.message"
          ></textarea>
        </div>

        <customCheckbox v-model="form.cacheInfo" 
        label="Save my name, email, and website in this browser for the next time I comment."/>

        <div class="">
            <button class="px-8 py-4 bg-tblack text-white cursor-pointer rounded-md hover:bg-orange-500 delay-75 transition-all">Send Message</button>
        </div>

      </div>

      <div class="col-span-1 lg:col-span-1  flex flex-col space-y-5 lg:space-y-8">

        <div class="flex flex-col justify-end items-start">
            <NuxtImg
      loading="lazy" src="/icons/location.svg" alt="" width="60" class="mb-2" />
            <h3 class="font-semibold text-xl mb-2">Location</h3>
            <a href="" class="text-tblack text-lg opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
        </div>

        <div class="flex flex-col justify-end items-start">
            <NuxtImg
      loading="lazy" src="/icons/email.svg" alt="" width="60" class="mb-2" />
            <h3 class="font-semibold text-xl mb-2">E-Mail</h3>
            <a href="" class="text-tblack text-lg opacity-80">ecommerce1@email.com</a>
            <a href="" class="text-tblack text-lg opacity-80">ecommerce2@email.com</a>
        </div>

        <div class="flex flex-col justify-end items-start">
            <NuxtImg
      loading="lazy" src="/icons/phone.svg" alt="" width="60" class="mb-2" />
            <h3 class="font-semibold text-xl mb-2">Phone</h3>
            <a href="tel:" class="text-tblack  text-lg opacity-80">+90 534 999 99 99</a>
            <a href="tel:" class="text-tblack text-lg opacity-80">+90 534 999 99 99</a>
        </div>
      </div>

    </div>
  </container>
</template>

<script setup>
import Breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import customCheckbox from "~/components/UI/customCheckbox.vue";
import customInput from "~/components/UI/customInput.vue";
useHead({
  title: 'Contact Us | Dummy E-Commerce',
  meta: [
    { name: 'description', content: 'Get in touch with Dummy E-Commerce for inquiries and support.' },
    { name: 'robots', content: 'index, follow' }, // Allow indexing for contact information
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, // Responsive viewport
    // Additional meta tags can be added as needed
  ],
})
const form = ref({
  nameSurname: "",
  email: "",
  subject: "",
  message: "",
  cacheInfo: "",
});
</script>

<style scoped>
.textarea-label{
    position: absolute;
    left: 5%;
    top: -7%;
    background: white;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
