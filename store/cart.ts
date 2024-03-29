import { defineStore } from "pinia";

interface product {
    name: string,
    id: number,
    category: string,
    quantity: number,
    image: string,
    price: number
}

export const useCartStore = defineStore("cartStore", () => {
    const cartList = ref<product[]>([])

    const cartCount = computed(() => {
        return cartList.value.reduce((acc, curr) => {
            return acc + (curr.quantity)
        }, 0)
    })


    const cartTotalCost = computed(() => {
        return cartList.value.reduce(
            (acculamator, currentValue) => acculamator + (currentValue?.price * currentValue.quantity),
            0
        );
    });

    const addCart = (param: product) => {

        const isExist = cartList.value.some((item) => {
            return item.id === param.id
        })

        if (isExist) {
            const productIndex = cartList.value.findIndex((item) => {
                return item.id === param.id
            })

            cartList.value[productIndex].quantity = cartList.value[productIndex].quantity + 1

        } else {
            cartList.value.push(param)
        }

    }

    const removeCart = (param: product) => {
        cartList.value = cartList.value.filter((item) => item.id !== param.id)
    }

    return {
        addCart,
        removeCart,
        cartList,
        cartCount,
        cartTotalCost
    }
},{ persist: true})