import { type } from "@testing-library/user-event/dist/type";
import CartActionTypes from "./Cart.types";

export const togglecarthidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem=item=>({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})
export const clearItemFromCart=(item) =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item

})
export const removeItem=item=>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})