import React from 'react';
import { togglecarthidden } from '../redux/cart/Cart.action';
import './CartDropdwon.scss';
import { createStructuredSelector } from 'reselect';
import Custombutton from '../custombutton/Custombutton';
// import { togglecarthidden } from '../redux/cart/Cart.action';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/Cart.selector';
import CartItemcomp from '../car-item/CartItemcomp';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({cartItems,dispatch  }) => {
  const navigate=useNavigate()
  const navigatehandle=()=>{
    navigate('/checkout')
    dispatch(togglecarthidden())
  }
  return (
    <div className="cart-dropdown" >
      <div className="cart-items">
      {cartItems.length ? (
          cartItems.map(cartItem => <CartItemcomp key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Custombutton onClick={ 
        navigatehandle} childern={'Check out'}></Custombutton>
    </div>
  );
};

const mapDispatchToProps = createStructuredSelector ({
 cartItems:selectCartItems
});

export default connect(mapDispatchToProps)(CartDropdown);
