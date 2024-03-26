<template>
  <Breadcrumb title="My Account" subtitle="Sign In" />

  <container class="lg:mt-20 md:mt-10 mt-6 relative z-50">
    <img
      src="/shape/slider-shape-1.png"
      alt=""
      class="absolute right-0 top-5 opacity-25 lg:opacity-75"
    />
    <img
      src="/shape/slider-shape-2.png"
      alt=""
      class="absolute left-0 top-1/2 opacity-25 lg:opacity-75"
    />
    <img
      src="/shape/slider-shape-3.png"
      alt=""
      class="absolute opacity-25 lg:opacity-75"
    />
    <div
      class="flex flex-col mx-auto login w-full lg:w-3/4 xl:w-2/4 gap-5 relative z-30"
    >
      <div class="text-center text-base md:text-lg">
        <h2
          class="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3"
        >
          Login To Dummy E-Commerce
        </h2>
        <p>
          Don’t have an account?
          <nuxt-link to="/register" class="text-torange">
            Create a free account
          </nuxt-link>
        </p>
      </div>

      <div class="flex mt-4 justify-center items-center gap-5 flex-wrap">

        <div
          class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer"
        >
          <Icon name="logos:facebook" size="28" class="inline-block relative" />
        </div>

        <div
          class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer"
        >
          <Icon name="logos:apple" size="28" class="inline-block relative" />
        </div>

        <div
          class="border border-gray-200 py-3 px-6 rounded-md hover:shadow-sm hover:shadow-orange-700/50 cursor-pointer"
        >
          <Icon
            name="devicon:google"
            size="28"
            class="inline-block relative mr-2"
          />
          Sign In With Google
        </div>
      </div>

      <div class="flex justify-center items-center gap-5">
        <div class="grow">
          <hr class="h-px my-8 bg-gray-600 border-0" />
        </div>
        <div class="text-muted">Or Sign In With Email</div>
        
        <div class="grow">
          <hr class="h-px my-8 bg-gray-600 border-0" />
        </div>
      </div>
      
      <span class="text-red-500 text-base text-center capitalize bg-red-100 w-1/2 mx-auto py-2 rounded-md" v-if="errorMsg">  {{ errorMsg }} </span>
      
      <Form @submit="handleSubmit" :validation-schema="signInSchema">
        <div class="flex flex-col gap-5">
          <div class="relative">
            <veeInput
              type="text"
              name="username"
              placeholder="Demo User: kminchelle"
              label="Username"
              success-message="its valid"
              value="kminchelle"
            />
            <ErrorMessage name="username" class="text-sm text-orange-600" />
          </div>

          <div class="relative">
            <veeInput
              type="password"
              name="password"
              label="Password"
              placeholder="Password: 0lelplR"
              success-message="Its valid"
              value="0lelplR"
            />
            <ErrorMessage name="password" class="text-sm text-orange-600" />
          </div>

          <div class="flex justify-between items-center">
            <div class="label-remember relative">
              <Field type="checkbox" class="hidden" name="checkbox" />
              <span
                :class="{
                  'checkbox-checked checked': isChecked,
                  checkbox: !isChecked,
                }"
              ></span>
              <label class="text-sm font-medium text-gray-700 ms-6"
                >Remember Me</label
              >
              <span
                class="absolute left-0 right-0 top-0 bottom-0"
                @click="checkInput"
              ></span>
            </div>
            <nuxt-link to="">Forget Password?</nuxt-link>
          </div>

          <div class="mt-5">
            <button
              type="submit"
              class="cursor-pointer px-8 py-3 bg-tblack text-lg text-white w-full rounded-md hover:bg-orange-600 transition-all delay-75"
            >
              Login
            </button>
          </div>
        </div>
      </Form>
    </div>
  </container>
</template>

<script setup>
import Breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import { useAuthStore } from "~/store/auth";
import veeInput from "~/components/UI/veeInput.vue";
import { storeToRefs } from "pinia";

const router = useRouter();

const authStore = useAuthStore();
const { signIn } = authStore;
const { errorMsg, isAuthenticated } = storeToRefs(authStore);
const isChecked = ref(false);


const checkInput = () => {
  isChecked.value = !isChecked.value;
};

const handleSubmit = async (values) => {
  await signIn(values);
  if (isAuthenticated.value) {
    router.push({ path: "/" });
  }
};

const signInSchema = {
  username(value) {
    if (!value) {
      return "This field is required";
    }

    const regex = /^[a-z_]{6,10}$/;
    if (!regex.test(value)) {
      return "İts not a valid username";
    }

    return true;
  },

  password(value) {
    if (!value) {
      return "This field is required";
    }

    // if the field is not a valid password
    const regex = /^(?=.*[0-9])(?=.*[A-Z]).{7}$/;
    if (!regex.test(value)) {
      return "İt is not a valid password";
    }

    // All is good
    return true;
  },
};
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
.input-label {
  position: absolute;
  left: 5%;
  top: -15%;
  background: white;
  padding-left: 15px;
  padding-right: 15px;
}

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
