import React, { useReducer } from "react";

import axiosClient from "./axios";


// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags

import {
  GET_CATEGORIES,
  GET_ITEMS,
  GET_STORES,
  POST_CATEGORY,
  POST_ITEMS,
  POST_STORE,
} from "./values";

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    categories:[],
    items: [],
    stores:[],
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

  // POST Methods
  const addCategory = async(category) => {
    const res = await axiosClient.post("/api/category/", category)

    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addStore = async(store) => {
    const res = await axiosClient.post("/api/store/", store)

    dispatch({
      type: POST_STORE,
      payload: res.data
    });
  };
  const addItem = async (item,sid,cid) => {
    try {
      const res = await axiosClient.post(`/api/item/${sid}/${cid}/`, item);
      dispatch({
        type: POST_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error adding item:", error);
      // Handle error scenario if needed
    }
  };
  // GET Methods

  const getCategories = async () => {
    const res = await axiosClient.get("/api/category/getall");
    console.log(res.data);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };

  const getItems = async () => {
    const res = await axiosClient.get("/api/item/getall");

    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  };

  const getStores = async () => {
    const res = await axiosClient.get("/api/store/getall");
    console.log(res.data);
    dispatch({
      type: GET_STORES,
      payload: res.data
    });
  };

  const handleDelete = async categoryID => {
   
    axiosClient
      .delete(`api/category/${categoryID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };
  const DeleteStore = async storeID => {
   
    axiosClient
      .delete(`api/store/${storeID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };
  
  
  const handleDelete1 = async itemID => {
   
    axiosClient
      .delete(`/api/item/${itemID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };

  const updateCategory = async(category,id) => {
   console.log("id:",id);
    axiosClient
      .put(`/api/category/${id}`,category) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };/*
  const updateItem = async(item,id) => {
   console.log("id:",id);
    axiosClient
      .put(`/items/update/${id}`,item) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };*/

  const getdata = async categoryID => {
   
    axiosClient
      .get(`api/category/${categoryID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };
  return (
    <userContext.Provider
      value={{
        items: state.items,
        categories:state.categories,
        stores: state.stores,
        addCategory,
        addItem,
        addStore,
        getCategories,
        getItems,
        getStores,
        handleDelete,
        handleDelete1,
        DeleteStore,
        updateCategory,
        //updateItem
        getdata
      }}
    >
      {props.children}
    </userContext.Provider>
  );
    };
export default Context;