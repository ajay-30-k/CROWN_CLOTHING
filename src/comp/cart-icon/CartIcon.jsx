import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/122 shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {togglecarthidden } from '../redux/cart/Cart.action';
import { selectCartItemsCount } from '../redux/cart/Cart.selector';

const CartIcon = ({ togglecarthidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={togglecarthidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  togglecarthidden: () => dispatch(togglecarthidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


