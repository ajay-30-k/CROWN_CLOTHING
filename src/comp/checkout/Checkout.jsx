import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../redux/cart/Cart.selector';
import StripeCheckOutButton from '../strip-button/StripButton';
import { motion } from 'framer-motion';
// import CheckoutItem from '../checkout-item/CheckoutItem'; // Assume you have a CheckoutItem component for rendering each item
import CheckoutItem from '../checout-item/CheckoutItem';
const Checkout = ({ cartItems, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }} className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        
      )}
      <div className='total'>
        <span>TOTAL:  ₹{total}</span>
      </div>
      {
        total > 1 ? (
          <StripeCheckOutButton price={total} />
        ) : (
          <div className='add-items-message'>
            Please add items to proceed with the payment.
          </div>
        )
      }
    </motion.div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
