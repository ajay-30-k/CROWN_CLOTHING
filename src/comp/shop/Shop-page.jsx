import React, { useState } from "react";
import SHOP_DATA from "./Shopdata";
import Previewcollcomp from "../preview-collection/Previewcoll.comp";
import { selectCollections} from "../redux/shop/ShopSelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../collectionOverview/CollectionOverview";
import { Route, Routes } from "react-router-dom";
import Category from "../page/category/Category";
import { motion } from "framer-motion";
const Shoppagecomp = ({match}) => {
  console.log('Match prop:', match)
  
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }} className="shop-page">
      <Routes>
        <Route exact path='/' element={<CollectionOverview/>} />
        <Route path='/:categoryId' element={<Category/>}/>
        </Routes>
    </motion.div>
  );
};

export default  Shoppagecomp;