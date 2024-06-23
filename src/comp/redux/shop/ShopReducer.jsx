// shopReducer.js
// import { FETCH_PRODUCTS, UPDATE_PRODUCT, ADD_PRODUCT } from '../Admin/AdminActionTypes';
import { UPDATE_PRODUCT,ADD_PRODUCT,FETCH_PRODUCTS } from '../Admin/AdminActionType';
import SHOP_DATA from '../../shop/Shopdata';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        collections: action.payload,
      };
    case UPDATE_PRODUCT:
      const { collectionType, product } = action.payload;
      return {
        ...state,
        collections: state.collections.map((collection) =>
          collection.title.toLowerCase() === collectionType.toLowerCase()
            ? {
                ...collection,
                items: collection.items.map((item) =>
                  item.id === product.id ? product : item
                ),
              }
            : collection
        ),
      };
    case ADD_PRODUCT:
      const { newCollectionType, newProduct } = action.payload;
      return {
        ...state,
        collections: state.collections.map((collection) =>
          collection.title.toLowerCase() === newCollectionType.toLowerCase()
            ? {
                ...collection,
                items: [...collection.items, newProduct],
              }
            : collection
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
