import {
    POST_CATEGORY,
    GET_CATEGORIES,
    GET_ITEMS,
    GET_STORES,
    POST_ITEMS,
    POST_STORE
  
  } from "./values";
   
  export default (state, action) => {
    
    switch (action.type) {
      case POST_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload]
        };
  
      case POST_ITEMS:
        return {
          ...state,
          items: [...state.items, action.payload]
        };

        case POST_STORE:
        return {
          ...state,
          stores: [...state.stores, action.payload]
        };

      case GET_ITEMS:
        return {
          ...state,
          items: action.payload
        };
  
      case GET_CATEGORIES:
        return {
          ...state,
          categories: action.payload
        };

        case GET_STORES:
          return {
            ...state,
            stores: action.payload
          };
       
      default:
        break;
    }
  };