import { defineStore } from "pinia";
import {object,string,number,array} from 'yup';

interface productData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    thumbnail: string;
    images: string[];
  }
  

const productSchema = object().shape({
    id: number().required(),
    title: string().required(),
    description: string().required(),
    price: number().required(),
    discountPercentage: number().required(),
    rating: number().required(),
    stock: number().required(),
    category: string().required(),
    thumbnail: string().required(),
    images: array().of(string()).required(),
});

export const useProductsStore = defineStore("productsStore", () => {
    //All products categories
    const allProductsCat = ref<string[]>([]);

    const singleProduct = ref<productData>();

    const searchResult = ref<productData[]>();

    const loadStatus = ref<boolean>(false);

    //Categories products (all smartphones)
    const categoryProducts = ref<productData[]>();


    //fetch all product categories
    const getAllProductsCat = async () => {
        loadStatus.value = true;
        try {
            const response = await fetch("https://dummyjson.com/products/category-list");
            const data = await response.json();

            //check response status because non-200 responses won't throw JavaScript errors by default
            if (!response.ok) {
                throw new Error("Failed to fetch products categories");
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
        } 
        
        catch (error) {
            console.error(error, "all products can not fetch");
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
                throw new Error(`Product data couldn't fetch because ${data.message}`);
                return false;
            }

            // Validate the fetched data against the schema
            await productSchema.validate(data);

            // If validation succeeds, update the singleProduct value
            singleProduct.value = data;

            return true;
        }

        catch (error:any) {
            if (error.message.includes("Product data couldn't fetch") || error.message.includes("Invalid product ID")) {
                showError({ statusCode: 404, statusMessage: "Product not found" })
              }
            console.error('Error fetching or validating product data:', error.message);
            return false;
        }

        finally {
            loadStatus.value = false;
        }
    };

    // It takes product types as a param like phone, notebook ....
    const searchProducts = async (param: string) => {
        loadStatus.value = true;
        try {
            const response = await fetch(
                `https://dummyjson.com/products/search?q=${param}`
            );

            if (!response.ok) {
                throw new Error("Failed search to product");
                return false
            }


            const data = await response.json();

            if (data) {
                searchResult.value = data?.products;
            }

            else {
                searchResult.value = [];
            }

            return true


        }

        catch (error) {
            console.error(error, "Failed to fetch products with type ");
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
        singleProduct,
        searchResult,
    };
});
