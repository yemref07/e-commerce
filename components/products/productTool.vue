<template>
    <div class="flex flex-col border toolbox rounded-md  items-center  justify-center" :class="{'toolbox-hover': hover}">

        <div class="tool border-b-2 p-2" @click="addProductToCart">
            <Icon name="clarity:shopping-cart-line" class="" size="28" />
        </div>

        <div class="tool border-b-2 p-2" @click="wishHandler">
            <Icon v-if="!wishStatus" name="ph:heart" size="28"/>
            <Icon v-else name="ph:heart-fill" size="28" color="red"/>
        </div>
        
        <nuxt-link :to="`/categories/${category}/${name}?productId=${productID}`">
            <div class="tool p-2">
                <Icon name="solar:eye-broken" class="" size="28" />
            </div>
        </nuxt-link>
    </div>

    <alertNotification
      :title="notificationModal.title"
      :show="notificationModal.isVisible"
      @is-visible="notificationModal.isVisible = false"
    />
    
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/store/cart';
import { useWishlistStore } from '~/store/wishlist';
import alertNotification from '~/components/UI/alertNotification.vue'

const props = defineProps({
    hover:Boolean,
    productID:String,
    category:String,
    name:String,
    image:String,
    price:Number
})

//Cart Store
const cartStore = useCartStore()
const { addCart } = cartStore
const { cartList} =  storeToRefs(cartStore)

const addProductToCart = () => {
    if(props.category && props.productID && props.name && props.image && props.price){
        addCart({
            name:props.name,
            id:props.productID ,
            category:props.category,
            quantity:1,
            image:props.image,
            price:props.price
        })

        notificationModal.title = "Product added to cart";
        notificationModal.isVisible = true;
    }
    else{
        console.error("This product does not have an essential data for adding to cart")
    }
}


//wishlist store

const wishlistStore = useWishlistStore()
const { addWishList, removeWishList} = wishlistStore
const { wishlist} = storeToRefs(wishlistStore)

const removeFromWishlist = () => {
    if(props.productID){
        removeWishList(props.productID)
        notificationModal.title = "Product removed";
        notificationModal.isVisible = true;
    }
    else{
        console.error("This product does not have an proper ID")
    }
}

const addProductToWishList = () => {
    if(props.category && props.productID && props.name && props.image && props.price){
        addWishList({
            name:props.name,
            id:props.productID ,
            category:props.category,
            quantity:1,
            image:props.image,
            price:props.price
        })
        notificationModal.title = "Product added to wishlist";
        notificationModal.isVisible = true;
    }
    else{
        console.error("This product does not have an essential data for adding to wishlist")
    }
}

const wishStatus = computed(()=>{
    return wishlist.value.some((item)=>{
      return  item.id === props.productID
    })
})

const wishHandler = () => {

    if(wishStatus.value){
       return removeFromWishlist();
    }

    else{
        addProductToWishList();
    }
}


const notificationModal = reactive({
  isVisible: false,
  title: "",
})

</script>

<style scoped>
.toolbox{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.toolbox{
    position: absolute;
    right: -5px;
    bottom: 60%;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s 0s ease-out;
}

.tool{
    color: var(--tblack);
    cursor: pointer;
    transition: all 0.2s 0s ease-out;
}

.tool:hover{
    background-color: var(--torange);
    color: whitesmoke;
}

.toolbox-hover{
    right: 10px !important;
    visibility: visible !important;
    opacity: 1 !important;
}

</style>