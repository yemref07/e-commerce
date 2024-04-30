<template>
  <breadcrumb title="Home" subtitle="Blog" />
  <container class="mt-12">
    <div class="grid lg:grid-cols-6">
      <div class="lg:col-span-4">
        <span class="text-muted text-base">Blog Tag</span>
        <h2 class="text-tblack text-xl md:text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <div class="flex items-center gap-2 mt-4">
          <Icon
            name="solar:calendar-bold-duotone"
            class=""
            size="20"
            color="#ff685e"
          />

          <p class="inline">Oct 10, 2024</p>

          <span class="mx-2 text-muted">|</span>

          <Icon name="vaadin:chat" class="" size="20" color="#ff685e" />
          <p class="inline">Com 09</p>
        </div>

        <nuxt-img
          src="/blog-demo-images/blog-detail.jpg"
          sizes="sm:400px, md:600px, lg:800px"
          class="rounded-md mt-4 w-full"
        />

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
            <div
              class="border-2 border-gray-100 rounded-md p-1 text-tpurple"
            >
              <SocialShare network="facebook" :label="false" />
            </div>

            <div
              class="border-2 border-gray-100 rounded-md p-1 text-tpurple"
            >
              <SocialShare network="twitter" :label="false" />
            </div>

            <div
              class="border-2 border-gray-100 rounded-md p-1 text-tpurple"
            >
              <SocialShare network="whatsapp" :label="false" />
            </div>

            <div
              class="border-2 border-gray-100 rounded-md p-1 text-tpurple"
            >
              <SocialShare network="telegram" :label="false" />
            </div>
          </div>

        </div>
      </div>

      <div class="lg:col-span-2"></div>
    </div>
  </container>
</template>

<script setup>
import container from "~/components/UI/container.vue";
import breadcrumb from "~/components/UI/breadcrumb.vue";
</script>

<style lang="scss" scoped></style>
