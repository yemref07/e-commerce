<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import { useAuthStore } from './store/auth';
const authStore = useAuthStore()
const token = useCookie('token')
const { getAuthUser } = authStore
const {userData} = storeToRefs(authStore)

onMounted(async ()=>{
  if(token.value && !userData.value){
    await getAuthUser()
  }
})

</script>
