<template>
    <breadcrumb title="Dummy Blog" subtitle="Blog Posts" />
    <container class="mt-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-8 xl:gap-12">
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-1.jpg"/>
            </div>
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-2.jpg"/>
            </div>
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-3.jpg"/>
            </div>
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-1.jpg"/>
            </div>
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-3.jpg"/>
            </div>
            <div class="col-span-1 mb-6">
                <blogSlideItem  :desc="demoDesc" title="demo" img="/blog-demo-images/blog-2.jpg"/>
            </div>
        </div>
        <div class="flex justify-center mt-12 items-center">
            <div class="">
                <Icon name="ic:twotone-arrow-left" size="32" class="text-tblack cursor-pointer" />
            </div>

            <div class="mx-8 text-lg">
                1
            </div>

            <div class="">
                <Icon name="ic:twotone-arrow-right" size="32" class="text-tblack cursor-pointer" />
            </div>

        </div>
    </container>
</template>

<script setup>
import breadcrumb from "~/components/UI/breadcrumb.vue";
import container from "~/components/UI/container.vue";
import blogSlideItem from "~/components/sliders/blogSlideItem.vue";
const demoDesc = ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")


</script>

<style lang="css" scoped>

</style>