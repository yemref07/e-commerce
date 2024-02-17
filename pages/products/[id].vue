<template>
  <container class="mt-5">
    <div class="grid lg:grid-cols-12 gap-5 md:gap-12">
      <div class="col-span-6">
        <div class="flex gap-5">
          <div class="flex flex-col space-y-3">
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb1.jpg"
                alt=""
                width="78"
                @click="goToSlide(0)"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb2.jpg"
                alt=""
                width="78"
                @click="goToSlide(1)"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb3.jpg"
                alt=""
                width="78"
                @click="goToSlide(2)"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb4.jpg"
                alt=""
                width="78"
                @click="goToSlide(3)"
              />
            </div>
          </div>

          <Splide
            ref="splide"
            @splide:visible="setThumb"
            :options="{
              direction: 'ttb',
              arrows: false,
              perPage: 1,
              heightRatio: 1,
              pagination: false,
            }"
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img src="/produc-detail-thumb-image/big1.jpg" alt="Sample 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/produc-detail-thumb-image/big2.jpg" alt="Sample 2" />
            </SplideSlide>
            <SplideSlide>
              <img src="/produc-detail-thumb-image/big3.jpg" alt="Sample 3" />
            </SplideSlide>
            <SplideSlide>
              <img src="/produc-detail-thumb-image/big4.jpg" alt="Sample 4" />
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div class="col-span-6">
        <h2 class="text-muted">Mobile Devices</h2>
        <h1
          class="text-black text-xl md:text-2xl lg:text-3xl font-semibold product-title"
        >
          Samsung Android Smart Phone
        </h1>

        <div class="flex flex-row justify-start items-center gap-3 mt-5">
          <div class="">
            <span class="bg-sky-100 px-3 py-2 mt-2 rounded-md text-blue-800">
              in stock
            </span>
          </div>

          <div class="flex items-center">
            <Icon
              name="solar:star-bold"
              size="16"
              class="text-tyellow"
              v-for="(item, index) in rate"
              :key="index"
            />
          </div>
          <div class="">
            <span class="text-muted">(3 Reviews)</span>
          </div>
        </div>

        <div class="mt-6">
          <p
            class="text-desc text-sm leading-7"
            :class="{ 'line-clamp-6': descVisible }"
          >
            Akıllı cep telefonu dünyasında dengeleri değiştiren modellere imza
            atan Samsung, Galaxy A30 serisine, teknik yönden güçlü ve özellikle
            kamera becerileriyle öne çıkan Galaxy A34 modelini ekliyor.
            Bütçesini yormadan, güncel işletim sistemi ve donanım özelliklerine
            sahip bir telefon almayı hedefleyen herkese seslenen Samsung Galaxy
            A34 128 GB 8 GB RAM (Samsung Türkiye Garantili), markanın, 4 yıl
            yazılım güncellemesi garantisi ve 5 yıl güvenlik güncellemesi
            garantisiyle kullanıcıların takdirini kazanıyor. Sunduğu teknik
            özellikler değerlendirildiğinde ulaşılabilir fiyat aralıklarına
            konumlandırılan akıllı cep telefonu, çift SIM kart destekli oluşuyla
            da beğeni topluyor. Stereo hoparlör, su ve toza dayanıklılık, ekran
            içinde parmak izi okuyucu gibi temel özelliklerinin yanı sıra
            taşıdığı donanımsal yeterliliklerle teknoloji tutkunları için en iyi
            cep telefonu alternatiflerinden biri hâline gelen Galaxy A34,
            görünümüyle dikkatleri üzerine çekiyor. Kendinden önce gelen seri
            üyelerinde olduğu gibi markanın Sonsuz-O ekran tasarımı ve şık
            kasasıyla beğeni toplayan ürün, 6,6 inç genişliğindeki ekranına
            karşın kompakt sayılabilecek ölçüleri ile kullanıcı kitlesini
            artırıyor. 161,3 x 78,1 x 8,2 mm’lik fiziksel ölçüleri ve 199
            gramlık ağırlığıyla, taşınabilirlik sınırlarının altında kalmayı
            başaran Samsung Galaxy A34 128 GB 8 GB RAM (Samsung Türkiye
            Garantili) tasarım anlamında, sahiplerini memnun ediyor.
          </p>
          <span
            class="text-torange cursor-pointer"
            @click="descVisible = !descVisible"
            >{{ descVisible ? "Show More" : "Show Less" }}</span
          >
        </div>

        <div class="mt-4">
          <span class="text-gray-400 text-sm mr-3 line-through">$329.000</span>
          <span class="font-semibold lg:text-xl xl:text-2xl text-tblack"
            >$288.000</span
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
          >
            Add To Cart
          </button>
        </div>

        <div class="mt-4">
          <button
            class="bg-blue-500 text-white w-full py-3 hover:bg-black hover:text-white delay-76 ease-in duration-150"
          >
            Buy Now!
          </button>
        </div>

        <div class="mt-6 flex flex-row">
          <div class="text-gray-600 text-sm cursor-pointer">
            <Icon name="teenyicons:git-compare-outline" size="22" class="" />
            Compare
          </div>

          <div class="text-gray-600 mx-3 text-sm cursor-pointer">
            <Icon name="ph:heart" size="24" class="" />
            Add Wishlist
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
            <span>Category: Headphones</span>
          </div>

          <div class="">
            <span>Tag: Android</span>
          </div>
        </div>

        <div class="mt-6 flex flex-row gap-2 justify-start items-center">
          <span>Share:</span>

          <div class="border-2 border-gray-100 rounded-full p-1">
            <Icon name="bxl:facebook" size="24" class="text-gray-500" />
          </div>
          <div class="border-2 border-gray-100 rounded-full p-1">
            <Icon name="ri:twitter-x-fill" size="20" class="text-gray-600" />
          </div>
          <div class="border-2 border-gray-100 rounded-full p-1">
            <Icon name="ri:instagram-line" size="24" class="text-gray-600" />
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
            <img src="/payment/payment-option.png" alt="" width="200" />
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
  </container>

  <transition name="fade">
    <container class="mt-10" v-if="activeTab === 1">
      <div class="flex flex-col lg:px-10 xl:px-20">
        <h2 class="text-lg">Headphones</h2>
        <h1 class="text-2xl xl:text-3xl mt-2 font-semibold">
          Gaming Head Phone
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
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
            <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Phone</td>
              <td class="px-6 py-4">$799</td>
            </tr>
          </tbody>
        </table>
      </div>
    </container>
  </transition>

  <transition name="fade">
    <container class="mt-10" v-if="activeTab === 3">
      <div class="grid lg:grid-cols-2">
        <div class="col-span-1 items-baseline">
          <div class="border-2 border-gray-200 py-10 px-8 w-fit">
            <h3 class="text-tblack text-lg mb-2">Customer Reviews</h3>

            <div class="mb-5">
              <span class="text-tblack font-semibold text-4xl me-3 align-middle"
                >4.5</span
              >
              <Icon
                name="solar:star-bold"
                size="16"
                class="text-tyellow"
                v-for="(item, index) in rate"
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

        <div class="col-span-1 items-center justify-center content-center">
          <div class="mb-5">
            <h3 class="text-tblack lg:text-xl xl:text-3xl">
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
                    class="w-2/3"
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
                    class="w-2/3"
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
                    v-model="review.reviewMsg"
                    rows="4"
                    type="text"
                    class="lg:w-2/3 border border-gray-200 text-tblack text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-4"
                    placeholder="Write Your Message Here"
                    required
                  ></textarea>
                  <p
                    class="text-xs text-red-500 mt-2"
                    v-if="review.reviewMsg === ''"
                  >
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
                  class="mt-6 bg-blue-500 text-white py-2 px-12 hover:bg-black transition-all delay-75 duration-75 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 mt-20">
        <productReviewCard
          v-for="(item, index) in allComments"
          :key="item.id"
          :comment="item.body"
          img-src="/users/male.png"
          rate="4"
          date="06 March, 2023"
          :name="item.user.username"
        />
      </div>

      <button
        @click="getMoreComments(12)"
        class="py-2 px-10 border-2 text-black text-center mx-auto mt-12 block w-full hover:text-orange-500 rounded-sm"
      >
        See More Comments
      </button>
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
      />
      <alertNotification />
    </container>
  </transition>
</template>

<script setup lang="ts">
import container from "~/components/UI/container.vue";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import colorSelectInput from "~/components/UI/colorSelectInput.vue";
import customInput from "~/components/UI/customInput.vue";
import { useCommentStore } from "../../store/comment";
import { storeToRefs } from "pinia";
import productReviewCard from "../../components/products/product-review-card.vue";
import alertError from "~/components/UI/alertError.vue";
import alertNotification from "~/components/UI/alertNotification.vue";
import alertSuccess from "~/components/UI/alertSuccess.vue";
import customCheckbox from "~/components/UI/customCheckbox.vue";
import starRating from "~/components/UI/starRating.vue";

const commentStore = useCommentStore();
const { getAllComments, sendComment } = commentStore;
const { allComments } = storeToRefs(commentStore);
const initialCommentsLimit = ref(6);

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

onMounted(() => {
  //fetch All comments (its defualt get 6comments)
  getAllComments(initialCommentsLimit.value);
});

// Load More Reviews
const getMoreComments = (param: number) => {
  initialCommentsLimit.value += param;
  getAllComments(initialCommentsLimit.value);
};

const splide = ref();
const rate = ref(5);

//product description more-less status
const descVisible = ref(true);

//reviews form data
const review = reactive({
  reviewMsg: "",
  name: "",
  email: "",
  check: false,
  rate: 0,
});

// Send New Review - Due to result it'll display error or success alert
const addNewReview = async () => {
  if (
    review.reviewMsg !== "" &&
    review.name !== "" &&
    review.email !== "" &&
    review.check !== false
  ) {
    const isSuccess = await sendComment(review);

    if (!isSuccess) {
      errorModal.isVisible = true;
      errorModal.desc =
        "Sorry we couldnt send your review please try again later";
    } else {
      successModal.isVisible = true;
      successModal.desc =
        " Review is succesfully send , please continute contribute more review in the future";
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

//Change active slide with using thumnail images
const setThumb = function (splide: any) {
  console.log(splide);
};

// Set desired color of product
const setProductColor = (param: string) => {
  orderDetail.color = param;
  console.log(param);
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
  -webkit-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
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
