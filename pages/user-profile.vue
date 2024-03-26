<template>
  <container>
    <div
      class="grid md:grid-cols-4 md:mt-10 lg:mt-12 md:px-10 md:gap-8 lg:gap-12"
    >
      <!-- profile-sidebar -->
      <div
        class="md:col-span-1 flex flex-col gap-1 shadow-md text-tblack rounded-md"
      >
        <div
          class="flex gap-4 items-center cursor-pointer py-4 px-3"
          :class="{ 'active-tab': isActive(1) }"
          @click="setActive(1)"
        >
          <Icon
            name="carbon:user-profile"
            size="22"
            :class="{ 'text-torange': isActive(1) }"
          />
          <span class="text-base"> Profile</span>
        </div>

        <div
          class="flex gap-4 items-center cursor-pointer py-4 px-3"
          :class="{ 'active-tab': isActive(2) }"
          @click="setActive(2)"
        >
          <Icon
            name="carbon:location"
            size="22"
            :class="{ 'text-torange': isActive(2) }"
          />
          <span class="text-base"> Address</span>
        </div>

        <div
          class="flex gap-4 items-center cursor-pointer py-4 px-3"
          :class="{ 'active-tab': isActive(3) }"
          @click="setActive(3)"
        >
          <Icon
            name="carbon:list"
            size="22"
            :class="{ 'text-torange': isActive(3) }"
          />
          <span class="text-base"> My Orders</span>
        </div>

        <div
          class="flex gap-4 items-center cursor-pointer py-4 px-3"
          :class="{ 'active-tab': isActive(4) }"
          @click="setActive(4)"
        >
          <Icon
            name="carbon:notification"
            size="22"
            :class="{ 'text-torange': isActive(4) }"
          />
          <span class="text-base"> Notifications</span>
        </div>

        <div
          class="flex gap-4 items-center cursor-pointer py-4 px-3"
          :class="{ 'active-tab': isActive(5) }"
          @click="setActive(5)"
        >
          <Icon
            name="carbon:locked"
            size="22"
            :class="{ 'text-torange': isActive(5) }"
          />
          <span class="text-base"> Change Password</span>
        </div>
      </div>

      <!-- tabs content -->
      <div class="md:col-span-3">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center">
            <div class="">
              <img
                :src="userData?.image || '/users/male.png'"
                alt="User Profile Image"
                width="85"
                class="inline-block"
              />

                <input type="file" class="hidden" ref="loadImage" @change="loadProfileImg" accept="image/*"></input>
                <Icon
                  @click="openFileInput"
                  name="material-symbols-light:add-a-photo-outline"
                  size="28"
                  class="text-white bg-orange-500 rounded-full p-1 cursor-pointer hover:bg-orange-300"
                />

            </div>

            <div class="ms-3">
              <h3 class="font-semibold text-xl xl:text-2xl">
                Welcome {{ userData?.firstName || "No Name" }}
                {{ userData?.lastName || "No Name" }}
              </h3>
              <p class="text-base mt-1">
                You have
                <span class="text-tpurple font-semibold">04</span> Notifications
              </p>
            </div>
          </div>

          <div class="">
            <button class="border text-tblack py-2 px-10" @click="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import container from "../components/UI/container.vue";
import { useAuthStore } from "../store/auth";
import { ref } from 'vue'

//Initializing auth store and getting user data
const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
const { logout } = authStore;


//handle custom file loading logic
const loadImage = ref(null);
const openFileInput= () => {
    if(loadImage.value)
    loadImage.value?.click()
}

 // Allowed extensions
const acceptedImageExtensions = ref(['.jpg', '.jpeg', '.png', '.gif']);

const isAllowedType = (file:any) => {
    const extension = file.name.split('.')[1].toLowerCase();
    console.log(extension)
    return acceptedImageExtensions.value.includes(extension);
  };

const loadProfileImg = (event) => {
     const imageFile = event.target.files[0];
     if(imageFile && isAllowedType(imageFile) ){
        //Load Image
     }
     else{
        console.log('Its not an allowed image type')
     }
}

//handle tab changing
const activeTab = ref<number>(1);
const setActive = (param: number): void => {
  activeTab.value = param;
};
const isActive = (param: number): boolean => {
  return param === activeTab.value;
};


</script>

<style lang="css" scoped>
.active-tab {
  background: #ff685e1a;
}
.active-tab span {
  color: var(--torange);
}
</style>
