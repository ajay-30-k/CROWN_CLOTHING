import React, { useState } from "react";
import { data } from "./Data";
// import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import Menuitem from "../menu-item/Menu-item";
import "./directory.scss";
import { selecDrirecorySection } from '../redux/Directory/DirectorySelector'
import {connect} from'react-redux'
import { animations } from "./DirectoryAnimation";
import { motion } from "framer-motion";

const Directory = ({sections}) => {
  
  
  return (
    <motion.div className="directory-menu"
   
    initial="hidden"
    animate="visible"
    variants={animations}
    transition={{ duration: 10 }  }>
      {sections.map((item ) => (
        <Menuitem  key={item.id} title={item.title}  imageurl={item.imageUrl} size={item.size} linkurl={item.linkUrl} />
      ))}
    </motion.div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selecDrirecorySection
});

export default connect(mapStateToProps)(Directory);
