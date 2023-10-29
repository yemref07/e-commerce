<template>
    <Breadcrumb title="Register Now" subtitle="Register" />

    <container class="mt-20 relative z-50">
      <img src="shape/slider-shape-1.png" alt="" class="absolute right-0 top-5 opacity-25 lg:opacity-75" />
      <img src="shape/slider-shape-2.png" alt="" class="absolute left-0 top-1/2 opacity-25 lg:opacity-75" />
      <img src="shape/slider-shape-3.png" alt="" class="absolute opacity-25 lg:opacity-75" />
      <div class="flex flex-col mx-auto login w-full lg:w-3/4 xl:w-2/4 gap-5 relative z-30">
        <div class="text-center text-base md:text-lg">
          <h2 class="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3">Sıng Up E-Commerce</h2>
          <p>
            Already have an account?
            <nuxt-link to="/signin" class="text-torange">
             Sign In
            </nuxt-link>
          </p>
        </div>
  
        <div class="flex mt-4 justify-center items-center gap-5 flex-wrap">
          <div class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer">
            <Icon
              name="devicon:google"
              size="28"
              class="inline-block relative mr-2"
            />
            Sign Up With Google
          </div>
  
          <div class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer">
            <Icon name="logos:facebook" size="28" class="inline-block relative" />
          </div>
  
          <div class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer">
            <Icon name="logos:apple" size="28" class="inline-block relative" />
          </div>
        </div>
  
        <div class="flex justify-center items-center gap-5">
          <div class="grow">
            <hr class="h-px my-8 bg-gray-600 border-0" />
          </div>
          <div class="text-muted">Or Sign Up With Email</div>
          <div class="grow">
            <hr class="h-px my-8 bg-gray-600 border-0" />
          </div>
        </div>
  
        <div class="flex flex-col gap-5">
  
          <div class="relative">
            <label
              class="input-label text-sm font-medium text-gray-700 "
              >Your Name</label
            >
            <input
              v-model="nameSurname"
              type="email"
              class="border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="John Doe"
              required
            />
          </div>

          <div class="relative">
            <label
              class="input-label text-sm font-medium text-gray-700 "
              >Email Address</label
            >
            <input
              v-model="email"
              type="email"
              class="border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="john@mail.com"
              required
            />
          </div>

          <div class="relative">
            <label
              class="input-label text-sm font-medium text-gray-700 "
              >Password</label
            >
            <input
              v-model="password"
              type="email"
              class="border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder="Min. 6 Character"
              required
            />
          </div>
  
          <div class="flex justify-start items-center">
              <div class="label-remember relative">
                  <input type="checkbox" v-model="isChecked" class="hidden">
                  <span :class="{'checkbox-checked checked':isChecked,'checkbox':!isChecked}"></span>
                  <label class=" text-sm font-medium text-gray-700 ms-6">I accept the terms of the Service & Privacy Policy.</label>
                  <span class="absolute left-0 right-0 top-0 bottom-0" @click="checkInput"></span>
              </div>
          </div>
      
          <div class=" mt-5">
            <button @click="singIn" class=" cursor-pointer px-8 py-3 bg-tblack text-lg text-white w-full rounded-md
             hover:bg-orange-600 transition-all delay-75">
             Sign Up
            </button>
          </div>
        </div>
      </div>
    </container>
  </template>
  
  <script setup>
  import Breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
  const isChecked = ref(false)
  
  const checkInput = () => {
    isChecked.value = !isChecked.value;
  }
  
  
  </script>
  
  <style scoped>
  .login {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 80px 40px;
    z-index: 20 !important;
    position: relative;
  }
  
  @media only screen and (max-width: 768px) {
    .login {
    padding: 40px 20px;
  
  }
  }
  .input-label{
      position: absolute;
      left: 5%;
      top: -15%;
      background: white;
      padding-left: 15px;
      padding-right: 15px;
  }
  
  .checkbox-checked{
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
      background-color:var(--torange) ;
      border-color: var(--torange) ;
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
      border: 1px solid #C3C7C9;
      z-index: -1;
      -webkit-transition: all 0.2s 0s ease-out;
      -moz-transition: all 0.2s 0s ease-out;
      -ms-transition: all 0.2s 0s ease-out;
      -o-transition: all 0.2s 0s ease-out;
      transition: all 0.2s 0s ease
  }
  
  
  </style>
  