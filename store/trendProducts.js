import { defineStore } from "pinia";

export const useTrendProductStore = defineStore("tredProduct", () => {
  const trendProducstData = ref({
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


  const updateStoreData = (productCat ,{ data, error, pending }) => {
    if(trendProducstData.value[productCat]){
      trendProducstData.value[productCat].error = error;
      trendProducstData.value[productCat].data = data.value;
      trendProducstData.value[productCat].pending = pending.value;
    }
    else{
      console.error(`${productCat} is not exist in the productsData ref , store/product.js`)
    }

    console.log(trendProducstData.value.electronics,"Hi theress")
  };


  //You should give as param refresh function of related category and its name to function 
  const callRefresh = (func,catName) => {
    if(trendProducstData.value[catName].refresh){
      func();
    }
  };

  // you can use this in a any compenent with is related categorys data will refresh
  const refreshData = (catName) => {
    if(trendProducstData.value[catName]){
      trendProducstData.value[catName].refresh = true;
    }
    else{
      console.error(`${catName} its not an valid category name`)
    }
  };

  return {
    callRefresh,
    refreshData,
    updateStoreData,
    trendProducstData,
  };
});
