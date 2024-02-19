import { defineStore } from 'pinia'

export const useProductsStore = defineStore ('productsStore', () =>{ 
    //All products categories
    const allProductsCat = ref< string []>([])

    //fetch all product categories
    const getAllProductsCat = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories')
            const data = await response.json()
            console.log(response)

            //check reponse status because non-200 responses won't throw JavaScript errors by default
            if(!response.ok){
                throw new Error('Failed to fetch products categiroes',response.status)
            }

            //check reponse data is an array
            if (Array.isArray(data)) {
                allProductsCat.value = [...data]
            }

            //if not throw error
            else{
                throw new Error('İnvalid data formate received')
            }

            return true
        } 
        
        catch (error) {
            console.error(error, 'all products can not fetch')
            return false
        }
    }

    return{
        allProductsCat,
        getAllProductsCat
    }
})