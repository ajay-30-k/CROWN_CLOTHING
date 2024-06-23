export const addItemtocart=(cartItems,cartItemtoadd)=>{
const exisitingItem=cartItems.find(cartitem=>cartitem.id==cartItemtoadd.id)
if (exisitingItem) {
    return cartItems.map(cartItem=>
        cartItem.id==cartItemtoadd.id?{...cartItem,quantity:cartItem.quantity + 1}
        :cartItem
    )
    
}
return[...cartItems,{...cartItemtoadd,quantity:1}]
}
export const removeItemFromCart=(cartItems,cartItemToRemove)=>{
 const existingSartItem= cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id)
 if (existingSartItem.quantity===1) {
    return cartItems.filter(cartItem=>cartItem.id !== cartItemToRemove.id)
 }
 return cartItems.map(
    cartItem=>cartItem.id===cartItemToRemove.id ?
    {...cartItem,quantity:cartItem.quantity - 1}:cartItem
 )
}