// src/comp/redux/Admin/AdminAction.jsx

// import { FETCH_PRODUCTS } from './productActionTypes'; // Assuming you have defined FETCH_PRODUCTS in productActionTypes
import { FETCH_PRODUCTS,UPDATE_PRODUCT,ADD_PRODUCT } from "./AdminActionType";
export const fetchProducts = () => {
  // Example asynchronous action creator using Redux Thunk
  return async (dispatch) => {
    try {
      // Example: Fetching products from an API
      const response = await fetch('https://api.example.com/products');
      const data = await response.json(); // Assuming the response is JSON data

      // Dispatch FETCH_PRODUCTS action with fetched products as payload
      dispatch({ type: FETCH_PRODUCTS, payload: data.products }); // Replace `data.products` with the actual property containing products
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error cases if needed
    }
  };
};
export const updateProduct = (collectionType, product) => ({
    type: UPDATE_PRODUCT,
    payload: { collectionType, product }
  });
  
  export const addProduct = (collectionType, product) => ({
    type: ADD_PRODUCT,
    payload: { collectionType, product }
  });