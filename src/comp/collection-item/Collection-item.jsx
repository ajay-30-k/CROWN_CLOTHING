import React from "react";
import { connect } from "react-redux";
import "./colectio-item.scss";
import Custombutton from "../custombutton/Custombutton";
import { addItem } from "../redux/cart/Cart.action";
const Collectionitem = ({item ,addItem }) => {
  const {id, name, price, imageUrl}=item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
       
       
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
          <span className="price">₹{price}</span>
        </div>
      <Custombutton onClick={()=>addItem(item)} inverted childern={"add to cart"}></Custombutton>
    </div>
  );
};
const mapdispatch=dispatch=>({
addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapdispatch) (Collectionitem);
