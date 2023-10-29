import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const producstData = ref({
    electronics:{
      data: "",
      error: "",
      pending: "",
      refresh: false
    },
    jewelery:{
      data: "",
      error: "",
      pending: "",
      refresh: false
    },
    mensCloth:{
      data: "",
      error: "",
      pending: "",
      refresh: false
    },
    womensCloth:{
      data: "",
      error: "",
      pending: "",
      refresh: false
    }
  }
 );


  // const dataToStore = ({ data, error, pending }) => {
  //   electronics.value.data = data.value;
  //   electronics.value.pending = pending.value;
  //   electronics.value.error = error;
  //   console.log(electronics.value, "storeda");
  // };


  const updateStoreData = (productCat ,{ data, error, pending }) => {
    if(producstData.value[productCat]){
      producstData.value[productCat].error = error;
      producstData.value[productCat].data = data.value;
      producstData.value[productCat].pending = pending.value;
    }
    else{
      console.error(`${productCat} is not exist in the productsData ref , store/product.js`)
    }

    console.log(producstData.value.electronics,"Hi theress")
  };



  //You should give as param refresh function of related category and its name to function 
  const callRefresh = (func,catName) => {
    if(producstData.value[catName].refresh){
      func();
    }
  };

  // you can use this in a any compenent with is related categorys data will refresh
  const refreshData = (catName) => {
    if(producstData.value[catName]){
      producstData.value[catName].refresh = true;
    }
    else{
      console.error(`${catName} its not an valid category name`)
    }
  };

  return {
    callRefresh,
    refreshData,
    updateStoreData,
    producstData,
  };
});
