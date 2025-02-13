import CartActionTypes from "./Cart.types";
import { addItemtocart,removeItemFromCart } from "./Cart.Utils";

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}
const cartreducer=(state=INITIAL_STATE,action)=>{
      switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            case CartActionTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems:addItemtocart(state.cartItems,action.payload)
                }
        case  CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
            }
      case CartActionTypes.REMOVE_ITEM:
        return{...state,
            cartItems:removeItemFromCart(state.cartItems,action.payload)
        }
        default:
            return state
      }
}
export default cartreducer