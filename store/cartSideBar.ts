import { defineStore } from "pinia";
import cart from "~/pages/cart.vue";

export const useCartSideBar = defineStore("cartSideBar",()=>{
    
    const cartVisibility = ref(false)
    const hideSideBar = () => {
        cartVisibility.value = false
    }
    const showSideBar = () => {
        cartVisibility.value = true
    }


    return{
        cartVisibility,
        hideSideBar,
        showSideBar
    }
})