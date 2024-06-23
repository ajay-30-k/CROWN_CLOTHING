// import { FETCH_PRODUCTS, UPDATE_PRODUCT } from './productActionTypes'; // Import action types
import { FETCH_PRODUCTS,UPDATE_PRODUCT } from "./AdminActionType";

const initialState = {
  items: [], // Array to hold products
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload, // Set fetched products into state
      };
    case UPDATE_PRODUCT:
      const { productId, updatedFields } = action.payload;
      // Update product in items array based on productId
      const updatedProducts = state.items.map(product =>
        product.id === productId ? { ...product, ...updatedFields } : product
      );
      return {
        ...state,
        items: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
