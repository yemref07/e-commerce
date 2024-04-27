<template>
  <container class="mt-5">
    <div class="grid lg:grid-cols-12 gap-5 md:gap-12">
      <div class="col-span-6">
        <div class="flex gap-5">
          <div class="flex flex-col space-y-6">
            <div
              class=""
              v-for="(item, index) in productDetailImgs"
              :key="index"
            >
              <NuxtImg
                provider="dummy"
                loading="lazy"
                :src="item"
                :alt="getSEOTitle"
                width="75"
                height="auto"
                @click="goToSlide(index)"
              />
            </div>
          </div>

          <Splide
            ref="splide"
            :options="{
              height: productImgHeight,
              direction: 'ttb',
              arrows: false,
              perPage: 1,
              heightRatio: 1,
              pagination: false,
            }"
            aria-label="My Favorite Images"
          >
            <SplideSlide
              v-for="(item, index) in productDetailImgs"
              :key="index"
            >
              <NuxtImg loading="lazy" :src="item" :alt="getSEOTitle"  provider="dummy"/>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div class="col-span-6">
        <h2 class="text-muted">{{ singleProduct?.category }}</h2>
        <h1
          class="text-black text-xl md:text-2xl lg:text-3xl font-semibold product-title"
        >
          {{ singleProduct?.title }}
        </h1>

        <div class="flex flex-row justify-start items-center gap-3 mt-5">
          <div class="" v-if="stockStatus">
            <span class="bg-sky-100 px-3 py-2 mt-2 rounded-md text-blue-800">
              in stock
            </span>
          </div>
          <div class="" v-else>
            <span class="bg-red-100 px-3 py-2 mt-2 rounded-md text-red-400">
              off stock
            </span>
          </div>

          <div class="flex items-center">
            <Icon
              name="solar:star-bold"
              size="16"
              class="text-tyellow"
              v-for="(item, index) in productRating"
              :key="index"
            />
            <Icon
              name="solar:star-bold"
              size="16"
              class="text-gray-400"
              v-for="(item, index) in emptyStars"
              :key="index"
            />
          </div>
          <div class="">
            <span class="text-muted"
              >{{ singleProduct?.stock || 0 }} Review</span
            >
          </div>
        </div>

        <div class="mt-6">
          <p
            class="text-desc text-sm leading-7"
            :class="{ 'line-clamp-3': descVisible }"
          >
            {{ singleProduct?.description || "No Text" }}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            quasi quibusdam neque nesciunt sed dolorem perferendis quod at
            tenetur totam, ab accusamus sint! Consectetur assumenda suscipit
            consequatur voluptatum aliquid excepturi reiciendis expedita eaque
            perspiciatis laudantium, illo, fugiat adipisci. Corrupti illo cumque
            nostrum doloribus asperiores atque optio libero labore cum ipsam.
          </p>
          <span
            class="text-torange cursor-pointer"
            @click="descVisible = !descVisible"
            >{{ descVisible ? "Show More" : "Show Less" }}</span
          >
        </div>

        <div class="mt-4">
          <span class="text-gray-400 text-sm mr-3 line-through"
            >${{ singleProduct?.price || "Free" }}.00</span
          >
          <span class="font-semibold lg:text-xl xl:text-2xl text-tblack"
            >${{ finalCost }}</span
          >
        </div>

        <div class="mt-4 flex items-center">
          <span class="text-lg font-medium mr-4">Color:</span>

          <div @click="setProductColor('#7393B3')" class="mr-2">
            <colorSelectInput
              inputColor="#7393B3"
              :selected-color="orderDetail.color"
            />
          </div>

          <div @click="setProductColor('#ffc0cb')" class="mr-2">
            <colorSelectInput
              inputColor="#ffc0cb"
              :selected-color="orderDetail.color"
            />
          </div>

          <div @click="setProductColor('#ff7373')" class="mr-2">
            <colorSelectInput
              inputColor="#ff7373"
              :selected-color="orderDetail.color"
            />
          </div>

          <div @click="setProductColor('#b0e0e6')" class="mr-2">
            <colorSelectInput
              inputColor="#b0e0e6"
              :selected-color="orderDetail.color"
            />
          </div>
        </div>

        <div
          class="mt-4 flex flex-row items-center justify-between border-2 border-red-600 px-4 py-2 bg-red-100"
        >
          <div class="">
            <Icon name="mdi:fire" size="32" class="text-red-600" />
            <span class="text-red-600 align-middle lg:text-lg">
              Flash Sale End In:</span
            >
          </div>

          <div class="">
            <span class="text-red-600 lg:text-lg">163D : 18H : 57M</span>
          </div>
        </div>

        <div class="mt-12 flex flex-row items-center">
          <div class="bg-gray-100 flex px-5 py-3 w-fit mr-3">
            <div class="cursor-pointer" @click="incQuantity">
              <Icon name="ic:round-plus" size="26" class="text-black" />
            </div>

            <div class="mx-6">
              <span class="input-quantity text-lg">{{
                orderDetail.quantity
              }}</span>
            </div>

            <div class="cursor-pointer" @click="decQuantity">
              <Icon name="ic:round-minus" size="26" class="text-black" />
            </div>
          </div>

          <button
            class="border-2 border-gray-200 px-6 py-3 w-full hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all ease-in-out duration-200 delay-75"
            @click="addProductToChart()"
          >
            Add To Cart
          </button>
        </div>

        <div class="mt-4">
          <button
            class="bg-orange-500 text-white w-full py-3 hover:bg-black hover:text-white delay-76 ease-in duration-150"
          >
            Buy Now!
          </button>
        </div>

        <div class="mt-6 flex flex-row">
          <div class="text-gray-600 text-sm cursor-pointer">
            <Icon name="teenyicons:git-compare-outline" size="22" class="" />
            Compare
          </div>
          <div
            v-if="!wishStatus"
            class="text-gray-600 mx-3 text-sm cursor-pointer"
            @click="addWish"
          >
            <Icon name="ph:heart" size="24" class="" />
            Add Wishlist
          </div>
          <div
            v-else
            class="text-gray-600 mx-3 text-sm cursor-pointer"
            @click="removeFromWishlist"
          >
            <Icon name="ph:heart-fill" size="24" color="red" />
            Remove
          </div>

          <div class="text-gray-600 text-sm cursor-pointer">
            <Icon name="ph:question" size="24" class="" />
            Ask a question
          </div>
        </div>

        <div class="mt-6 border-b border-gray-200"></div>

        <div class="mt-8 flex flex-col text-gray-700 text-sm gap-2">
          <div class="">
            <span>SKU: NVB7SDVX45</span>
          </div>

          <div class="">
            <span>Category: {{ singleProduct?.category || "category" }}</span>
          </div>

          <div class="">
            <span>Brand: {{ singleProduct?.brand || "brand name" }}</span>
          </div>
        </div>

        <div class="mt-6 flex flex-row gap-2 justify-start items-center">
          <span>Share:</span>

          <div class="border-2 border-gray-100 rounded-full p-1 text-gray-600">
            <!-- <Icon name="bxl:facebook" size="24" class="text-gray-500" /> -->
            <SocialShare network="facebook" :label="false" />
          </div>

          <div class="border-2 border-gray-100 rounded-full p-1 text-gray-600">
            <!-- <Icon name="ri:twitter-x-fill" size="20" class="text-gray-600" /> -->
            <SocialShare network="twitter" :label="false" />
          </div>

          <div class="border-2 border-gray-100 rounded-full p-1 text-gray-600">
            <SocialShare network="whatsapp" :label="false" />
          </div>

          <div class="border-2 border-gray-100 rounded-full p-1 text-gray-600">
            <SocialShare network="telegram" :label="false" />
          </div>
        </div>

        <div class="mt-6 flex flex-row justify-start items-center">
          <Icon name="charm:circle-tick" size="18" class="text-gray-600 me-2" />
          <span class="text-sm text-gray-600">30 days easy returns</span>
        </div>

        <div class="mt-2 flex flex-row justify-start items-center">
          <Icon name="charm:circle-tick" size="18" class="text-gray-600 me-2" />
          <span class="text-sm text-gray-600"
            >Order yours before 2.30pm for same day dispatch</span
          >
        </div>

        <div
          class="mt-4 bg-gray-100 flex flex-row py-5 px-4 lg:px-8 justify-between"
        >
          <div class="">
            <span class="text-tblack">Guaranteed safe & secure checkout</span>
          </div>
          <div class="">
            <NuxtImg
              loading="lazy"
              src="/payment/payment-option.png"
              alt=""
              width="200"
            />
          </div>
        </div>

        <input type="color" class="hidden" v-model="orderDetail.color" />
      </div>
    </div>
  </container>

  <container class="mt-24">
    <div class="flex flex-row justify-center info-tab-container">
      <button
        class="text-base lg:text-lg xl:text-xl info-tab"
        @click="changeActiveTab(1)"
        :class="{ 'tab-active': isActiveTab(1) }"
      >
        Description
      </button>
      <button
        class="text-base lg:text-lg xl:text-xl mx-12 info-tab"
        @click="changeActiveTab(2)"
        :class="{ 'tab-active': isActiveTab(2) }"
      >
        Additional Information
      </button>
      <button
        class="text-base lg:text-lg xl:text-xl info-tab"
        @click="changeActiveTab(3)"
        :class="{ 'tab-active': isActiveTab(3) }"
      >
        Reviews
      </button>
    </div>
    <alertError
      :title="errorModal.title"
      :desc="errorModal.desc"
      :confirm-btn="errorModal.confirmBtn"
      :show="errorModal.isVisible"
      :error-code="errorModal.errorCode"
      @is-visible="errorModal.isVisible = false"
    />
    <alertSuccess
      :title="successModal.title"
      :desc="successModal.desc"
      :show="successModal.isVisible"
      @is-visible="successModal.isVisible = false"
      :confirm-btn="successModal.confirmBtn"
    />
    <alertNotification
      :title="notificationModal.title"
      :show="notificationModal.isVisible"
      @is-visible="notificationModal.isVisible = false"
    />
  </container>

  <transition name="fade">
    <container class="mt-10" v-if="activeTab === 1">
      <div class="flex flex-col lg:px-10 xl:px-20">
        <h2 class="text-lg capitalize">
          {{ singleProduct?.category || "Category" }}
        </h2>
        <h1 class="text-2xl xl:text-3xl mt-2 font-semibold">
          {{ singleProduct?.title || "Title" }}
        </h1>
        <p class="text-desc mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis
          laboriosam aspernatur, fugit officiis eveniet consequatur, natus dicta
          repellendus, iure debitis. Quam blanditiis commodi iste enim adipisci
          perspiciatis dolore praesentium quaerat ipsa architecto, distinctio
          magnam? Quos minus delectus repellendus rerum dicta officiis ut et
          fugit fugiat neque vitae corporis, libero, aliquid corrupti. Enim ut
          consequuntur quo, consectetur natus maxime vero laboriosam. Tempore
          natus ipsam minus eligendi facilis odio ullam fugit quo! Nemo fugiat,
          error voluptates sit suscipit exercitationem facere dignissimos
          temporibus provident omnis debitis, rem illum. Nobis dolor illo
          pariatur necessitatibus odit! Minima officiis, asperiores quod
          doloremque reiciendis repellendus voluptas iure facilis animi tempora
          laborum nesciunt unde quis a repellat quasi quam natus consequatur
          suscipit accusantium, ducimus repudiandae labore similique. Ut quos
          repudiandae eum quis tempore quae quia cum incidunt voluptatum
          blanditiis, minus esse expedita! Facere nam at nostrum, quaerat in
          quia dolor, dolorum minima tempora cum recusandae, porro soluta? Ipsum
          quae illo nesciunt earum consectetur reiciendis commodi omnis.
          Laboriosam vel sunt minima facere veritatis enim nostrum cum ab totam
          suscipit dolorum ipsa magnam, neque nihil est debitis. Minus tempore
          possimus exercitationem aperiam excepturi odit iste consequuntur quo
          aliquam molestias vel perferendis quae, optio nesciunt magni eligendi
          provident debitis voluptates.
        </p>
      </div>
    </container>
  </transition>

  <transition name="fade">
    <container v-if="activeTab === 2" class="mt-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-600 uppercase bg-gray-300">
            <tr>
              <th scope="col" class="px-24 py-3"></th>
              <th scope="col" class="px-12 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b text-tblack bg-gray-200">
              <th scope="row" class="px-6 py-4 font-semibold">Lorem Ipsum</th>
              <td class="px-12 py-4">
                {{ singleProduct?.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </container>
  </transition>

  <transition name="fade">
    <container class="mt-10" v-if="activeTab === 3">
      <div class="grid lg:grid-cols-2">
        <div class="lg:col-span-1 items-baseline">
          <div class="md:border-2 border-gray-200 md:px-8 md:py-6 w-fit">
            <h3 class="text-tblack text-xl mb-2 font-semibold">
              Customer Reviews
            </h3>

            <div class="mb-5">
              <span
                class="text-tblack font-semibold text-2xl lg:text-4xl me-3 align-middle"
                >{{ singleProduct?.rating || "5" }}</span
              >
              <Icon
                name="solar:star-bold"
                size="16"
                class="text-tyellow"
                v-for="(item, index) in productRating"
                :key="index"
              />
              <Icon
                name="solar:star-bold"
                size="16"
                class="text-gray-400"
                v-for="(item, index) in emptyStars"
                :key="index"
              />
              <span class="ms-2">200 (reviews)</span>
            </div>

            <ProductsProductReviewRatingItem
              class="mt-2"
              star-rate="5"
              title="5 star"
              rate-amount="20"
            />
            <ProductsProductReviewRatingItem
              class="mt-2"
              star-rate="4"
              title="4 star"
              rate-amount="20"
            />
            <ProductsProductReviewRatingItem
              class="mt-2"
              star-rate="3"
              title="3 star"
              rate-amount="20"
            />
            <ProductsProductReviewRatingItem
              class="mt-2"
              star-rate="2"
              title="2 star"
              rate-amount="20"
            />
            <ProductsProductReviewRatingItem
              class="mt-2"
              star-rate="1"
              title="1 star"
              rate-amount="20"
            />
          </div>
        </div>

        <div class="lg:col-span-1 mt-8 lg:mt-0">
          <div class="mb-5">
            <h3 class="text-tblack text-xl xl:text-3xl font-semibold">
              Review This Product
            </h3>
            <p class="text-muted mt-3 text-sm mb-3">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <span class="me-2 text-muted text-sm align-sub">Your Rating:</span>

            <starRating @star-rate="(rate) => (review.rate = rate)" />

            <div class="flex flex-col gap-8 mt-12">
              <form>
                <div class="mb-6">
                  <customInput
                    label="Your Email"
                    input-type="email"
                    v-model="review.email"
                    class="w-full md:w-2/3"
                  />
                  <p
                    class="text-xs text-red-500 mt-2"
                    v-if="review.email === ''"
                  >
                    Email is required field
                  </p>
                </div>

                <div class="mb-6">
                  <customInput
                    label="Your Name"
                    input-type="text"
                    v-model="review.name"
                    class="w-full md:w-2/3"
                  />
                  <p
                    class="text-xs text-red-500 mt-2"
                    v-if="review.name === ''"
                  >
                    Name is required field
                  </p>
                </div>

                <div class="relative">
                  <textarea
                    v-model="review.msg"
                    rows="4"
                    type="text"
                    class="w-full lg:w-2/3 border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-4"
                    placeholder="Write Your Message Here"
                    required
                  ></textarea>
                  <p class="text-xs text-red-500 mt-2" v-if="review.msg === ''">
                    Message is required field
                  </p>
                </div>

                <customCheckbox
                  class="mt-6"
                  v-model="review.check"
                  label="Save my name, email, and website in this browser for the next time I comment."
                  @check="(param) => (review.check = param)"
                />
                <button
                  @click.prevent="addNewReview()"
                  class="mt-6 bg-orange-500 text-white py-2 px-12 hover:bg-black transition-all delay-75 duration-75 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 lg:mt-20 md:mt-10 mt-6">
        <ProductReviewCard
          v-for="(comment, index) in allComments"
          :key="comment?.postId"
          :comment="comment?.body"
          img-src="/users/male.png"
          rate="4"
          date="24 May"
          :name="comment?.user?.username"
        />
      </div>

      <button
        @click="getMoreComments(12)"
        class="py-2 px-10 border-2 text-black text-center mx-auto mt-12 block w-full hover:text-orange-500 rounded-sm"
      >
        See More Comments
      </button>
    </container>
  </transition>
</template>

<script setup lang="ts">
import container from "~/components/UI/container.vue";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import colorSelectInput from "~/components/UI/colorSelectInput.vue";
import customInput from "~/components/UI/customInput.vue";
import { useCommentStore } from "~/store/comment";
import { storeToRefs } from "pinia";
import ProductReviewCard from "~/components/products/product-review-card.vue";
import alertError from "~/components/UI/alertError.vue";
import alertNotification from "~/components/UI/alertNotification.vue";
import alertSuccess from "~/components/UI/alertSuccess.vue";
import customCheckbox from "~/components/UI/customCheckbox.vue";
import starRating from "~/components/UI/starRating.vue";
import { useProductsStore } from "~/store/products";
import { useCartStore } from "~/store/cart";
import { useWishlistStore } from "~/store/wishlist";

const route = useRoute();

const screenWidth = ref<number>(600);

const productImgHeight = computed(() => {
  return screenWidth.value > 991 ? 600 : 300;
});

onMounted(() => {
  screenWidth.value = window.innerWidth;
});

//Comments Store
const commentStore = useCommentStore();
const { getAllComments, sendComment } = commentStore;
const { allComments } = storeToRefs(commentStore);
const initialCommentsLimit = ref(6);

//Product Store
const productStore = useProductsStore();
const { singleProduct } = storeToRefs(productStore);
const { getSingleProduct } = productStore;

//We remove the first element of singleProduct images because first image is an tiny thumnnail image , for small cards and etc..
const productDetailImgs = computed(()=>{
  if(singleProduct.value){
    let length = singleProduct.value?.images.length
    return singleProduct.value?.images.slice(1, length)
  }
})

//Cart Store
const cartStore = useCartStore();
const { addCart } = cartStore;

//Wishlist Store
const wishlistStore = useWishlistStore();
const { addWishList, removeWishList } = wishlistStore;
const { wishlist } = storeToRefs(wishlistStore);

const getImageHeight = computed(() => {
  return 1;
});

const errorModal = reactive({
  isVisible: false,
  title: "Opps",
  desc: "There is an error",
  errorCode: "",
  confirmBtn: "Okay",
});

const successModal = reactive({
  isVisible: false,
  title: "Success",
  desc: "Operation is succeed",
  confirmBtn: "Okay",
});

const notificationModal = reactive({
  isVisible: false,
  title: "",
});

onMounted(async () => {
  //get product data with using product id
  // Check if productId is not null and is a string

  if (
    typeof route.query.productId === "string" &&
    route.query.productId !== ""
  ) {
    await getSingleProduct(route.query.productId);
  }

  //fetch All comments (its defualt get 6comments)
  await getAllComments(initialCommentsLimit.value);
});

//Watch query - product ID and if it changes get new products data
watch(
  () => route.params.id,
  async (newValue, oldValue) => {
    if (typeof newValue === "string" && newValue !== "") {
      await getSingleProduct(newValue);
    }
  }
);

// Load More Reviews
const getMoreComments = (param: number) => {
  initialCommentsLimit.value += param;
  getAllComments(initialCommentsLimit.value);
};

const splide = ref();

//product description more-less status
const descVisible = ref(true);

//reviews form data
const review = reactive({
  msg: "",
  name: "",
  email: "",
  check: false,
  rate: 0,
});

// Send New Review - Due to result it'll display error or success alert
const addNewReview = async () => {
  if (
    review.msg !== "" &&
    review.name !== "" &&
    review.email !== "" &&
    review.check !== false
  ) {
    const isSuccess = await sendComment(review);

    if (!isSuccess) {
      errorModal.isVisible = true;
      errorModal.desc =
        "Sorry we couldn't send your review please try again later";
    } else {
      successModal.isVisible = true;
      successModal.desc =
        " Review is succesfully send , please continute contribute more review in the future";
      review.msg = "";
      review.name = "";
      review.email = "";
      review.check = false;
    }
  } else {
    errorModal.isVisible = true;
    errorModal.desc = "Please fill the required area";
  }
};

//Active Tab Status
const activeTab = ref(1);

//Change active Tab
const changeActiveTab = (param: number) => {
  activeTab.value = param;
};

//Check tab is active or not
const isActiveTab = (param: number) => {
  if (param === activeTab.value) {
    return true;
  } else {
    return false;
  }
};

const isActiveColor = (param: string) => {
  if (param === orderDetail.color) {
    return true;
  } else {
    false;
  }
};

const orderDetail = reactive({
  color: "",
  quantity: 1,
});

//Products Cart Data
const productCoreData = computed(() => {
  const product = singleProduct.value;
  return {
    id: product?.id ?? "0",
    name: product?.title ?? "No Name",
    category: product?.category ?? "No Category",
    image: product?.images[0] ?? "No Image",
    price: parseFloat(finalCost.value),
    quantity: orderDetail.quantity,
  };
});

// Is product in wishlist
const wishStatus = computed(() => {
  return wishlist.value.some((item: any) => {
    return item.id === singleProduct.value?.id;
  });
});

// Add product to wishlist and show notification
const addWish = () => {
  addWishList(productCoreData.value);
  notificationModal.isVisible = true;
  notificationModal.title = "Product added to Wish List";
};

//Remove product from wiishlist and show notification
const removeFromWishlist = () => {
  const productId = singleProduct.value?.id;
  productId && removeWishList(productId);
  notificationModal.isVisible = true;
  notificationModal.title = "Product removed from Wish List";
};

//Add product to cart and show notification
const addProductToChart = () => {
  addCart(productCoreData.value);
  notificationModal.isVisible = true;
  notificationModal.title = "Product added to Cart";
};

// Set desired color of product
const setProductColor = (param: string) => {
  orderDetail.color = param;
};

// İncrease producst quantity
const incQuantity = () => {
  if (orderDetail.quantity >= 1) orderDetail.quantity += 1;
};

//decrease products quantity
const decQuantity = () => {
  if (orderDetail.quantity !== 1) orderDetail.quantity -= 1;
};

//Change active slide with using thumnail images
const goToSlide = (index: number) => {
  if (splide.value && splide.value.splide) {
    splide.value.go(index);
  }
};

// SEO Compable text for alt and title attirubute
const getSEOTitle = computed(() => {
  if (singleProduct.value?.title && singleProduct.value?.brand)
    return singleProduct.value?.title + "-" + singleProduct.value?.brand;
  else return "";
});

// Stock Status Of Product
const stockStatus = computed(() => {
  if (singleProduct.value?.stock) {
    return singleProduct.value?.stock > 0;
  }
});

// Rating Score Of Product
const productRating = computed(() => {
  if (singleProduct.value?.rating) {
    return Math.round(singleProduct.value?.rating);
  }
});

//Compute Empty Stars
const emptyStars = computed(() => {
  if (productRating.value) {
    return 5 - productRating.value;
  }
});

// Calc Discount Amount
const discountAmount = computed(() => {
  if (singleProduct.value?.price && singleProduct.value?.discountPercentage)
    return (
      (singleProduct.value?.price * singleProduct.value?.discountPercentage) /
      100
    );
});

//Final Cost Of The Product
const finalCost = computed(() => {
  if (
    singleProduct.value?.price !== null &&
    singleProduct.value?.price !== undefined &&
    discountAmount.value !== undefined &&
    discountAmount.value !== null
  )
    return Math.round(
      singleProduct.value?.price - discountAmount.value
    ).toFixed(2);
  else return "0";
});


useHead({
  title: () => `${getSEOTitle.value} | Dummy E-Commerce`,
  meta: [
    { name: 'description', content: 'Explore a wide variety of products across all categories on Dummy E-Commerce.' },
    { property: 'og:title', content: 'Shop All Categories | Dummy E-Commerce' }, // Consistent Open Graph title
    { property: 'og:description', content: 'Explore a wide variety of products across all categories on Dummy E-Commerce.' }, // Aligned Open Graph description
    { name: 'twitter:card', content: 'summary' }, // Twitter card type
    { name: 'twitter:title', content: 'Shop All Categories | Dummy E-Commerce' }, // Consistent Twitter title
  ],
})
</script>

<style scoped>
.input-quantity {
  text-align: center;
}

.info-tab-container {
  border-bottom: 2px solid #e0e2e3;
}

.info-tab {
  padding-bottom: 10px;
  transition: box-shadow 0.2s ease-in-out;
}

.tab-active {
  border-bottom: 2px solid var(--tpurple);
}

.input-label {
  position: absolute;
  left: 5%;
  top: -15%;
  background: white;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
