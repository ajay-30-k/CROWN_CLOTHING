import React from "react";
import "./styles/homepage.style.scss";
import Menuitem from "./menu-item/Menu-item";
import Directory from "./directory-menu/Directory";
import { motion } from "framer-motion";
const Homepagecomp = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }} className="homepage">
      <Directory />
    </motion.div>
  );
};

export default Homepagecomp;
