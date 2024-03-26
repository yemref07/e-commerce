import { storeToRefs } from "pinia"
import { useAuthStore } from "~/store/auth"
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  const token = useCookie('token')
  const {isAuthenticated} =  storeToRefs(authStore)

  if(token?.value){
    isAuthenticated.value = true
  }

  // Nuxt 3 middleware functions are designed to return a value to determine how the middleware chain proceeds.
  // Returning null or undefined indicates continuing the middleware execution as usual.
  // Returning a value with redirection logic (like navigateTo) tells Nuxt 3 to immediately interrupt the middleware chain and perform the redirection.
  // so because of the in below we returning the navigateTo function

  //if token is exist and users in sign-in page 
  if (isAuthenticated && to?.name === 'signin') {
    return navigateTo('/');
  }

  //if token not exist and user try to enter user-profile page redirect it to home
  if( !isAuthenticated && to?.name === "user-profile"){
    return navigateTo('/')
  }
  
})