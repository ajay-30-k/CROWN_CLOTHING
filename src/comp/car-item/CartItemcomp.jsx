import React from 'react'
import './CartItem.scss'
const CartItemcomp = ({item:{imageUrl,price,name,quantity}}) => {
  return (
    <div className='cart-item'>
        <img src={imageUrl} alt="" />
        <div className="ite-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ₹{price}</span>
        </div>

    </div>
  )
}

export default CartItemcomp