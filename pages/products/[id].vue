<template>
  <container class="mt-5">
    <div class="grid  lg:grid-cols-12 gap-5 md:gap-12">
      <div class="col-span-6">
        <div class="flex gap-5">
          <div class="flex flex-col space-y-3">
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb1.jpg"
                alt=""
                width="78"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb2.jpg"
                alt=""
                width="78"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb3.jpg"
                alt=""
                width="78"
              />
            </div>
            <div class="">
              <img
                src="/produc-detail-thumb-image/thumb4.jpg"
                alt=""
                width="78"
              />
            </div>
          </div>

          <Splide
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
        <h1 class="text-black text-xl md:text-2xl lg:text-3xl font-semibold product-title">
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
          <p class="text-desc text-sm leading-7" :class="{'line-clamp-6': descVisible}">
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
          <span class="text-torange cursor-pointer" @click="descVisible = !descVisible ">{{ descVisible ? 'Show More' : 'Show Less'}}</span>
        </div>

        <div class="mt-4">
          <span class=" font-semibold text-xl text-tblack">$288.000</span>
        </div>
      </div>

    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
import { register } from "swiper/element/bundle";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const rate = ref(5);
const descVisible = ref(true)

register();
const onProgress = (e) => {
  const [swiper, progress] = e.detail;
  console.log(progress);
};

const onSlideChange = (e) => {
  console.log("slide changed");
};

const setThumb = function (splide) {
  console.log(splide);
};
</script>

<style scoped>
.asd {
  color: white;
}


</style>
