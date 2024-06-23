import React from "react";
import "./Previewcollo.scss";
import Collectionitem from "../collection-item/Collection-item";
const Previewcollcomp = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Collectionitem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Previewcollcomp;
