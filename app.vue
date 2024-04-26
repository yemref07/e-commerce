<template>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
</template>


<script setup>
useSeoMeta({
  title: 'My Awesome E-commerce Website',
  ogTitle: 'My Awesome E-commerce Website',
  description: 'Welcome to a dummy e-commerce website, built solely for learning purposes.It has created with Nuxt 3 and with his awesome feature.',
  ogDescription: 'Welcome to a dummy e-commerce website, built solely for learning purposes.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})

</script>
