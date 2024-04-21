<template>
  <container>
    <div class="grid md:grid-cols-3 lg:grid-cols-4 md:mt-10 lg:mt-12 md:px-10 md:gap-8 lg:gap-12">

      <!-- sidebar -->
      <div
        class="md:col-span-1 lg:col-span-1 flex justify-start flex-row flex-wrap md:flex-col gap-1 shadow-sm text-tblack rounded-md">

        <div class="flex gap-4 items-center cursor-pointer py-4 px-3" :class="{ 'active-tab': isActive(1) }"
          @click="setActive(1)">
          <Icon name="carbon:user-profile" size="22" :class="{ 'text-torange': isActive(1) }" />
          <span class="text-base"> Profile</span>
        </div>

        <div class="flex gap-4 items-center cursor-pointer py-4 px-3" :class="{ 'active-tab': isActive(2) }"
          @click="setActive(2)">
          <Icon name="carbon:location" size="22" :class="{ 'text-torange': isActive(2) }" />
          <span class="text-base"> Address</span>
        </div>

        <div class="flex gap-4 items-center cursor-pointer py-4 px-3" :class="{ 'active-tab': isActive(3) }"
          @click="setActive(3)">
          <Icon name="carbon:list" size="22" :class="{ 'text-torange': isActive(3) }" />
          <span class="text-base"> My Orders</span>
        </div>

        <div class="flex gap-4 items-center cursor-pointer py-4 px-3" :class="{ 'active-tab': isActive(4) }"
          @click="setActive(4)">
          <Icon name="carbon:notification" size="22" :class="{ 'text-torange': isActive(4) }" />
          <span class="text-base"> Notifications</span>
        </div>

        <div class="flex gap-4 items-center cursor-pointer py-4 px-3" :class="{ 'active-tab': isActive(5) }"
          @click="setActive(5)">
          <Icon name="carbon:locked" size="22" :class="{ 'text-torange': isActive(5) }" />
          <span class="text-base"> Change Password</span>
        </div>

      </div>

      <!-- tabs contents start -->

      <!-- Profile Tab -->
      <div class="md:col-span-2 lg:col-span-3 mt-10 md:mt-0 shadow-sm" v-if="activeTab === 1">
        <div class="flex flex-row justify-between items-center gap-2">

          <div class="flex flex-row items-center">
            <div class="">
              <NuxtImg loading="lazy" :src="userData?.image || '/users/male.png'" alt="User Profile Image" width="85"
                class="inline-block rounded-full" provider="dummy" />

              <input type="file" class="hidden" ref="loadImage" @change="loadProfileImg" accept="image/*"></input>
              <Icon @click="openFileInput" name="material-symbols-light:add-a-photo-outline" size="28"
                class="text-white bg-orange-500 rounded-full p-1 cursor-pointer hover:bg-orange-300" />

            </div>

            <div class="ms-3">
              <h3 class="font-semibold lg:text-xl xl:text-2xl">
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
            <button class="border text-tblack py-2 px-10" @click="closeSession">
              Logout
            </button>
          </div>

        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 justify-start items-center mt-10 gap-2 md:gap-3 lg:gap-6">

          <div class="col-span-1">

            <div class="flex flex-col relative border justify-center items-center py-12 rounded-md">
              <Icon name="carbon:download" size="75" class="text-tblack" />
              <div
                class="flex flex-col items-center justify-center absolute bottom-3/4 left-2/3  bg-orange-500 rounded-full w-8 h-8">
                <span class="text-white">
                  2
                </span>
              </div>

              <h4>Downloads</h4>

            </div>

          </div>

          <div class="col-span-1">

            <div class="flex flex-col relative border justify-center items-center py-12 rounded-md">
              <Icon name="ph:package-thin" size="75" class="text-tblack" />
              <div
                class="flex flex-col items-center justify-center absolute bottom-3/4 left-2/3  bg-orange-500 rounded-full w-8 h-8">
                <span class="text-white">
                  2
                </span>
              </div>

              <h4>Orders</h4>

            </div>

          </div>

          <div class="col-span-1">

            <div class="flex flex-col relative border justify-center items-center py-12 rounded-md">
              <Icon name="ph:heart-light" size="75" class="text-tblack" />
              <div
                class="flex flex-col items-center justify-center absolute bottom-3/4 left-2/3  bg-orange-500 rounded-full w-8 h-8">
                <span class="text-white">
                  2
                </span>
              </div>

              <h4>Wishlist</h4>

            </div>

          </div>

          <div class="col-span-1">

            <div class="flex flex-col relative border justify-center items-center py-12 rounded-md">
              <Icon name="circum:discount-1" size="75" class="text-tblack" />
              <div
                class="flex flex-col items-center justify-center absolute bottom-3/4 left-2/3  bg-orange-500 rounded-full w-8 h-8">
                <span class="text-white">
                  2
                </span>
              </div>

              <h4>Discount Coupon</h4>

            </div>

          </div>

        </div>
      </div>

      <!-- Address Tab -->
      <div class="md:col-span-2 lg:col-span-3 mt-10 md:mt-0 shadow-sm" v-if="activeTab === 2">

        <div class="grid md:grid-cols-2">

          <div class="md:col-span-1">
            <div class="lg:flex md:gap-8 justify-start">
              <Icon name="carbon:task-location" size="60" class="text-torange mb-4 md:mb-0" />
              <ul class="text-tblack leading-8 md:leading-10">
                <li>
                  <h3 class="text-xl font-semibold mb-4">Billing Address</h3>
                </li>
                <li>
                  <span class="font-semibold">
                    Street:
                  </span>
                  Lorem Ipsum
                </li>
                <li>
                  <span class="font-semibold">
                    City:
                  </span>
                  Lorem Ipsum
                </li>
                <li>
                  <span class="font-semibold">
                    State/province/area
                  </span>
                  Kentucky
                </li>

                <li>
                  <span class="font-semibold">
                    Phone number:
                  </span>
                  270-428-8378
                </li>

                <li>
                  <span class="font-semibold">
                    Zip code:
                  </span>
                  42166
                </li>

                <li>
                  <span class="font-semibold">
                    Country:
                  </span>
                  United States
                </li>

              </ul>
            </div>
          </div>

          <div class="md:col-span-1 mt-10 md:mt-0">
            <div class="lg:flex md:gap-8 justify-start">

              <Icon name="carbon:delivery-truck" size="60" class="text-torange mb-4 md:mb-0" />

              <ul class="text-tblack leading-8 md:leading-10">
                <li>
                  <h3 class="text-xl font-semibold mb-4">Shipping Address</h3>
                </li>
                <li>
                  <span class="font-semibold">
                    Street:
                  </span>
                  Lorem Ipsum
                </li>
                <li>
                  <span class="font-semibold">
                    City:
                  </span>
                  Lorem Ipsum
                </li>
                <li>
                  <span class="font-semibold">
                    State/province/area
                  </span>
                  Kentucky
                </li>

                <li>
                  <span class="font-semibold">
                    Phone number:
                  </span>
                  270-428-8378
                </li>

                <li>
                  <span class="font-semibold">
                    Zip code:
                  </span>
                  42166
                </li>

                <li>
                  <span class="font-semibold">
                    Country:
                  </span>
                  United States
                </li>

              </ul>

            </div>

          </div>



        </div>

      </div>

      <!-- My Orders Tab -->
      <div class="md:col-span-2 lg:col-span-3 mt-10 md:mt-0 shadow-sm overflow-hidden" v-if="activeTab === 3">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-orange-500  ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>

              <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  #22451213214
                </th>
                <td class="px-6 py-4">
                  Huawei D15 Laptop
                </td>
                <td class="px-6 py-4 font-semibold">
                  Delivered
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
              </tr>

              <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  #22451213214
                </th>
                <td class="px-6 py-4">
                  Samsung Smart Phone S34
                </td>
                <td class="px-6 py-4 font-semibold">
                  Transfer Phase
                </td>
                <td class="px-6 py-4">
                  $1999
                </td>
              </tr>

              <tr class="bg-white border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  #22451213214
                </th>
                <td class="px-6 py-4">
                  Huawei D15 Laptop
                </td>
                <td class="px-6 py-4 font-semibold text-red-500">
                  Canceled
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
              </tr>


            </tbody>
          </table>
        </div>

      </div>

      <!-- My Notifications Tab -->
      <div class="md:col-span-2 lg:col-span-3 mt-10 md:mt-0 shadow-sm text-tblack" v-if="activeTab === 4">
        <div class="flex flex-col gap-2">
          <h3 class="mb-3 md:text-xl lg:text-2xl font-semibold">My Activity Setting</h3>
          <p class="text-sm md:w-2/3">Stay up to date with notification on activity that involves you including
            mentions, messages, replies to your bids, new items, sale and administrative updates</p>

          <label class="inline-flex items-center cursor-pointer mt-3">
            <input type="checkbox" value="" class="sr-only peer">
            <div
              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500">
            </div>
            <span class="ms-2 text-sm">Like & Follows Notifications</span>
          </label>

          <label class="inline-flex items-center cursor-pointer mt-3">
            <input type="checkbox" value="" class="sr-only peer">
            <div
              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500">
            </div>
            <span class="ms-2 text-sm">Post, Comments & Replies Notifications</span>
          </label>

          <label class="inline-flex items-center cursor-pointer mt-3">
            <input type="checkbox" value="" class="sr-only peer">
            <div
              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500">
            </div>
            <span class="ms-2 text-sm">New Product Notifications</span>
          </label>

        </div>

      </div>

      <div class="md:col-span-2 lg:col-span-3 mt-10 md:mt-0 shadow-sm text-tblack pb-5" v-if="activeTab === 5">
        <div class="flex flex-col gap-2">
          <h3 class="mb-3 md:text-xl lg:text-2xl font-semibold">Change Password</h3>
          <Form @submit="onSubmit" :validation-schema="passwordSchema">

            <div class="mb-4 input md:w-3/4">
              <veeInput type="password" name="oldPassword" label="Old Password" placeholder="" />
              <ErrorMessage name="oldPassword" v-slot="{ message }">
                <p class="text-sm text-orange-600">{{ message?.split(',')[0] }}</p>
                <p class="text-sm text-orange-600">{{ message?.split(',')[1] }}</p>
                <p class="text-sm text-orange-600">{{ message?.split(',')[2] }}</p>
              </ErrorMessage>
            </div>

            <div class="mb-4 input md:w-3/4">
              <veeInput type="password" name="newPassword" label="New Password" placeholder="" />
              <ErrorMessage name="newPassword" class="text-sm text-orange-600" />
            </div>

            <div class="mb-4 input md:w-3/4">
              <veeInput type="password" name="confirmPassword" label="Confirm Password" placeholder="" />
              <ErrorMessage name="confirmPassword" class="text-sm text-orange-600" />
            </div>

            <button type="submit" class="px-10 py-2 text-white bg-orange-500 rounded-md mt-5 hover:bg-slate-900">Change
              Password</button>
          </Form>
        </div>
      </div>

      <!-- tabs contents end-->
    </div>
  </container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import container from "../components/UI/container.vue";
import { useAuthStore } from "../store/auth";
import { ref } from 'vue'
import veeInput from "~/components/UI/veeInput.vue";

useHead({
  title: 'User Profile | Dummy E-Commerce', //You can Set dynamic title based on user data
  meta: [
    { name: 'description', content: 'View and manage your profile on Dummy E-Commerce.' },
    { name: 'robots', content: 'noindex, follow' }, 
  ],
})


const router = useRouter()

//Initializing auth store and getting user data
const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
const { logout } = authStore;


const closeSession = (): void => {
  logout();
  router.push({ path: "/" })
}

//handle custom file loading logic
const loadImage = ref(null);
const openFileInput = () => {
  if (loadImage.value)
    loadImage.value?.click()
}

// Allowed extensions
const acceptedImageExtensions = ref(['.jpg', '.jpeg', '.png', '.gif']);

const isAllowedType = (file: any) => {
  const extension = file.name.split('.')[1].toLowerCase();
  return acceptedImageExtensions.value.includes(extension);
};

const loadProfileImg = (event: any) => {
  const imageFile = event.target.files[0];
  if (imageFile && isAllowedType(imageFile)) {
    //Load Image
  }
  else {
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


//Password Changing
const passwordValidationRule = (value: any) => {
  if (!value) {
    return "This field is required";
  }

  // if the field is not a valid password
  const regex = /^(?=.*[0-9])(?=.*[A-Z]).{7}$/;

  const errors = [];

  if (!regex.test(value)) {
    if (!/[0-9]/.test(value)) {
      errors.push('At least one digit (0-9)');
    }
    if (!/[A-Z]/.test(value)) {
      errors.push('At least one uppercase letter (A-Z)');
    }
    if (value.length !== 7) {
      errors.push('Be exactly 7 characters long');
    }

    return errors.join('\n'); // Combine error messages with newlines
  }

  // All is good
  return true;
}

const confirmPasswordValRule = (value: any, context: any) => {
  //Check firstly is it a valid password
  const passwordRuleResult = passwordValidationRule(value);
  if (passwordRuleResult !== true) {
    return passwordRuleResult;
  }

  //check confirm and new are same if not return error message
  if (context.form?.newPassword !== value) {
    return "Your passwords should match with each other";
  }

  //all good
  return true;
}

const passwordSchema = {
  oldPassword: passwordValidationRule,
  newPassword: passwordValidationRule,
  confirmPassword: confirmPasswordValRule
}

const onSubmit = function (values: any) {
  alert(JSON.stringify(values, null, 2));
}



</script>

<style lang="css" scoped>
.active-tab {
  background: #ff685e1a;
}

.active-tab span {
  color: var(--torange);
}

.input :deep(input) {
  margin-bottom: 10px;
}
</style>
