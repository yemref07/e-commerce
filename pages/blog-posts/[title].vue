<template>
  <breadcrumb title="Home" subtitle="Blog" />
  <container class="mt-12">
    <div class="grid md:grid-cols-5 lg:grid-cols-6 md:gap-12 lg:gap-6">
      <div class="md:col-span-3 lg:col-span-4">
        <span class="text-muted text-base">Blog Tag</span>
        <h2 class="text-tblack text-xl md:text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <div class="flex items-center gap-2 mt-4">
          <Icon name="solar:calendar-bold-duotone" class="" size="20" color="#ff685e" />

          <p class="inline">Oct 10, 2024</p>

          <span class="mx-2 text-muted">|</span>

          <Icon name="vaadin:chat" class="" size="20" color="#ff685e" />
          <p class="inline">Com 09</p>
        </div>

        <nuxt-img src="/blog-demo-images/blog-detail.jpg" sizes="sm:400px, md:600px, lg:800px"
          class="rounded-md mt-4 w-full" />

        <div class="mt-6 lg:mt-14 text-gray-500 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            expedita ea, harum ut vitae suscipit doloribus porro molestias
            aperiam perferendis atque, fugit consequatur dolore voluptatibus
            nulla eaque necessitatibus provident dolorum odio corrupti
            reprehenderit eveniet sit iusto! Error optio iste architecto aliquid
            eum eligendi nobis corporis odio explicabo qui, ducimus culpa
            provident nostrum illum ab id, quos mollitia laudantium rerum quod
            quisquam! Eos minima sit quas reiciendis animi rem officiis quidem
            laborum ab, totam reprehenderit architecto commodi quasi quos
            numquam suscipit recusandae optio ad minus? Dolores consectetur
            aspernatur, asperiores optio maxime excepturi ut quo rerum, aperiam
            illo sapiente dicta dolorem.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum
            expedita ea, harum ut vitae suscipit doloribus porro molestias
            aperiam perferendis atque, fugit consequatur dolore voluptatibus
            nulla eaque necessitatibus provident dolorum odio corrupti
            reprehenderit eveniet sit iusto! Error optio iste architecto aliquid
            eum eligendi nobis corporis odio explicabo qui, ducimus culpa
            provident nostrum illum ab id, quos mollitia laudantium rerum quod
            quisquam!
          </p>

          <ul class="list-disc ps-8 mt-4 text-tblack">
            <li class="mb-2">Aute irure dolor in reprehenderit</li>
            <li class="mb-2">Occaecat cupidatat non proident sunt in culpa</li>
            <li class="mb-2">Pariatur enim ipsam.</li>
          </ul>
        </div>

        <div class="flex justify-between items-center mt-12 border-t py-8">
          <div class="flex justify-start items-center gap-2 flex-wrap">
            <h4 class="text-lg font-semibold text-tblack">Tag:</h4>
            <span>Tech,</span>
            <span>Discount,</span>
            <span>Software</span>
          </div>

          <div class="flex flex-row gap-2 justify-start items-center flex-wrap">
            <div class="border-2 border-gray-100 rounded-md p-1 text-tpurple">
              <SocialShare network="facebook" :label="false" />
            </div>

            <div class="border-2 border-gray-100 rounded-md p-1 text-tpurple">
              <SocialShare network="twitter" :label="false" />
            </div>

            <div class="border-2 border-gray-100 rounded-md p-1 text-tpurple">
              <SocialShare network="whatsapp" :label="false" />
            </div>

            <div class="border-2 border-gray-100 rounded-md p-1 text-tpurple">
              <SocialShare network="telegram" :label="false" />
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-2 lg:col-span-2 mt-4 md:mt-0">
        <div class="lg:px-8 lg:py-3 xl:px-12 lx:py-4 2xl:px-16 2xl:py-6">
          <customInput input-type="text" placeholder="Blog" label="Search" :model-value="search" />

          <div class="flex flex-col mt-4 items-start gap-4">
            <!-- Latest Post -->
            <h3 class="text-tblack text-lg lg:text-xl">Latest Post</h3>
            
            <div class="flex cursor-pointer items-center">
              <nuxt-link to="">
                <nuxt-img src="/blog-demo-images/blog-1.jpg" class="rounded-md" sizes="sm:75px, md:90px, lg:100px" />
              </nuxt-link>
              <div class="ms-4 lg:ms-6 cursor-pointer">
                <nuxt-link to="">
                  <h4 class="text-tblack text-base">New Techs In Mobile Phones</h4>
                  <Icon name="solar:calendar-bold-duotone" class="mr-2" size="20" color="#ff685e" />
                  <span class="align-middle">22 Nov, 2024</span>
                </nuxt-link>
              </div>
            </div>
            <div class="flex cursor-pointer items-center">
              <nuxt-link to="">
                <nuxt-img src="/blog-demo-images/blog-1.jpg" class="rounded-md" sizes="sm:75px, md:90px, lg:100px" />
              </nuxt-link>
              <div class="ms-4 lg:ms-6 cursor-pointer">
                <nuxt-link to="">
                  <h4 class="text-tblack text-base">New Techs In Mobile Phones</h4>
                  <Icon name="solar:calendar-bold-duotone" class="mr-2" size="20" color="#ff685e" />
                  <span class="align-middle">22 Nov, 2024</span>
                </nuxt-link>
              </div>
            </div>
            <div class="flex cursor-pointer items-center">
              <nuxt-link to="">
                <nuxt-img src="/blog-demo-images/blog-1.jpg" class="rounded-md" sizes="sm:75px, md:90px, lg:100px" />
              </nuxt-link>
              <div class="ms-4 lg:ms-6 cursor-pointer">
                <nuxt-link to="">
                  <h4 class="text-tblack text-base">New Techs In Mobile Phones</h4>
                  <Icon name="solar:calendar-bold-duotone" class="mr-2" size="20" color="#ff685e" />
                  <span class="align-middle">22 Nov, 2024</span>
                </nuxt-link>
              </div>
            </div>

     

            <!-- Categories -->
            <div class="mt-6">
              <h3 class="text-tblack text-lg lg:text-xl">Categories</h3>
              <ul class="text-gray-600 mt-4">
                <li class="mt-2">
                  <Icon name="iconamoon:arrow-right-2-thin" class="mr-2" size="20" color="#ff685e" />
                  Lorem, ipsum dolor.
                </li>
                <li class="mt-2">
                  <Icon name="iconamoon:arrow-right-2-thin" class="mr-2" size="20" color="#ff685e" />
                  Lorem, ipsum dolor.
                </li>
                <li class="mt-2">
                  <Icon name="iconamoon:arrow-right-2-thin" class="mr-2" size="20" color="#ff685e" />
                  Lorem, ipsum dolor.
                </li>
                <li class="mt-2">
                  <Icon name="iconamoon:arrow-right-2-thin" class="mr-2" size="20" color="#ff685e" />
                  Lorem, ipsum dolor.
                </li>
                <li class="mt-2">
                  <Icon name="iconamoon:arrow-right-2-thin" class="mr-2" size="20" color="#ff685e" />
                  Lorem, ipsum dolor.
                </li>
            
              </ul>
            </div>

            <!-- Banner -->
            <div class="flex flex-col justify-center items-center banner mt-16 px-6 py-8">
              <h4 class="text-center text-tblack text-lg lg:text-xl font-semibold">Start Shopping Now Don't Miss Discounts</h4>
              <h4 class="text-torange text-base lg:text-lg font-semibold mt-2">Dummy E-Commerce</h4>
              <nuxt-link to="/categories" title='Categories' class="bg-orange-500 text-white py-2 px-8 rounded-md mt-8">Start Now</nuxt-link>
              <nuxt-img src='/banners/banner-1.png' sizes="sm:75px, md:90px, lg:120px" class="mt-4" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
import breadcrumb from "~/components/UI/breadcrumb.vue";
import customInput from "~/components/UI/customInput.vue";

const search = ref("");
</script>

<style lang="css" scoped>
.banner{
    background: #ffb4af57;
    border-radius: 10px;
}
</style>
