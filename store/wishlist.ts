import { defineStore } from "pinia";

interface favorite{
    name: string,
    id: number,
    category: string,
    quantity: number,
    image: string,
    price: number
}


export const useWishlistStore = defineStore("wishlistStore",()=>{
    const wishlist = ref<favorite[]>([]);


    const addWishList = (param:favorite) => {
        wishlist.value.push(param)
    }

    const removeWishList = (productID:number) => {
      wishlist.value =  wishlist.value.filter((item:favorite)=>{
            return item.id !== productID
        })
    }


    return{
        addWishList,
        removeWishList,
        wishlist
    }
})