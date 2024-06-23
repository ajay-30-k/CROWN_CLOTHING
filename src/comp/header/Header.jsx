import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Crown } from "../../assets/084 crown.svg";
import { auth } from "../firebase/Firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../redux/cart/Cart.selector";
import { selectCurrentUser } from "../redux/user/UserSelector";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { headerVariants } from "./HeaderAnimation";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
const Header = ({ currentUser, hidden }) => {
  // usernme no avatar
  const userNameInitial = currentUser && currentUser.name ? currentUser.name.charAt(0) : '';
  // animation
  return (
    <motion.div
      className="header"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <Link className="logo-container" to="/">
        <Crown className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          <AnimatedText text="SHOP" />
        </Link>
        <Link className="option" to="/shop">
          <AnimatedText text="HOME" />
        </Link>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt={currentUser ? currentUser.displayName : "User Avatar"}
          src=""
        >
          {userNameInitial}
        </Avatar>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <AnimatedText text="SIGN OUT" />
          </div>
        ) : (
          <Link className="option" to="/signin">
            <AnimatedText text="SIGN IN" />
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </motion.div>
  );
};
const mapstatetoprpos = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapstatetoprpos)(Header);
