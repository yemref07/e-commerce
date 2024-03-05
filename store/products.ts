import { defineStore } from "pinia";

interface productData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export const useProductsStore = defineStore("productsStore", () => {
    //All products categories
    const allProductsCat = ref<string[]>([]);
    const singleProduct = ref<productData>();
    const searchResult = ref<productData[]>();
    const loadStatus = ref<boolean>(false);

    //Cateries products (all smartphones)
    const categoryProducts = ref<productData[]>();

    //fetch all product categories
    const getAllProductsCat = async () => {
        loadStatus.value = true;
        try {
            const response = await fetch("https://dummyjson.com/products/categories");
            const data = await response.json();

            //check reponse status because non-200 responses won't throw JavaScript errors by default
            if (!response.ok) {
                throw new Error("Failed to fetch products categiroes");
                return false;
            }

            //check reponse data is an array
            if (Array.isArray(data)) {
                allProductsCat.value = [...data];
            }

            //if not throw error
            else {
                throw new Error("İnvalid data formate received");
            }

            return true;
        } catch (error) {
            console.error(error, "all products can not fetch");
            return false;
        }

        finally {
            loadStatus.value = false;
        }
    };



    //Fetch data of single product with using ID
    const getSingleProduct = async (productID: string) => {
        loadStatus.value = true;
        try {
            const response = await fetch(
                `https://dummyjson.com/product/${productID}`
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error("Failed to fetch signle products");
                return false;
            }

            //ensure the fetched response in correct data format
            if (typeof data === "object") {
                singleProduct.value = data;
                return true;
            }

            else {
                throw new Error("Recieved product data format is not valid");
            }
        }

        catch (error) {
            console.error(error, "Cant fetch to product data");
            return false;
        }

        finally {
            loadStatus.value = false;
        }
    };

    // It takes product types as a param like phone, notebook ....
    const searchProducts = async (type: string) => {
        loadStatus.value = true;
        try {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${type}`
            );

            if (!response.ok) {
                throw new Error("Failed search product by type of the product");
            }

            const data = await response.json();

            if (data) {
                searchResult.value = data?.products;
                return true;
            }

            else {
                searchResult.value = [];
            }
        }

        catch (error) {
            console.error(error, "Failed to fect products with type ");
        }

        finally {
            loadStatus.value = false;
        }
    };

    //  Function to fetch all products of a given category
    const getProductsOfCategory = async (catName: string) => {
        loadStatus.value = true;
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${catName}`)

            if (!response.ok) {
                throw new Error(`Failed to fetch products for category ${catName}. Status: ${response.status}`);
                return false;
            }

            const data = await response.json();
            categoryProducts.value = data?.products;
        }

        catch (error) {
            console.error("Failed fetch categorys products", error)
            return false;
        }

        finally {
            loadStatus.value = false;
        }


    }


    return {
        allProductsCat,
        getAllProductsCat,
        getSingleProduct,
        searchProducts,
        getProductsOfCategory,
        categoryProducts,
        singleProduct
    };
});
