import React from 'react'
import'./CheckoutItem.scss'
import { connect } from 'react-redux'
import { clearItemFromCart,addItem,removeItem } from '../redux/cart/Cart.action'
import { motion } from 'framer-motion'
const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const {imageUrl,price,name,quantity}=cartItem
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10096;</div>
             <span className="value">{quantity}</span>   
            <div className="arrow" onClick={()=>addItem(cartItem)}>
            &#10097;
            </div>
            </span>
      <span className="price">₹{price}</span>
      <div className="remove-button" onClick={()=>clearItem(cartItem)}>
      &#9747;
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem:(item) => dispatch(addItem(item)),
    removeItem:(item) => dispatch(removeItem(item))
  });
export default connect(null,mapDispatchToProps) (CheckoutItem)