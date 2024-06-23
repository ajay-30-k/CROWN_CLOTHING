import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Shoppagecomp from "./comp/shop/Shop-page";
import Homepagecomp from "./comp/Homepage.comp";
import Header from "./comp/header/Header";
import Formss from "./comp/sign in-and-signout-page/Formss";
import Checkout from "./comp/checkout/Checkout";
import { selectCurrentUser } from "./comp/redux/user/UserSelector";
import { createStructuredSelector } from "reselect";
import {
  auth,
  createUserProfileDocument,
} from "./comp/firebase/Firebase.utils";
import { connect } from "react-redux";
import { SetCurrentUser } from "./comp/redux/user/User.action";
import { AnimatePresence } from "framer-motion";
import Admin from "./comp/Admin-panel/Admin";
import Adminroute from "./comp/Admin-panel/Adminroute";

const App = ({ currentUser, SetCurrentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          SetCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        SetCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [SetCurrentUser]);

  return (<div className="App">
    <Header />
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Homepagecomp />} />
        <Route path="/shop/*" element={<Shoppagecomp />} />
        {/* <Adminroute path="/admin" element={<Admin/>} /> */}
        <Route path="/admin"element={<Admin/>}/>
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <Formss />}
        />
        <Route path="/checkout" element={<Checkout />} />
        {/* Add more routes here if needed */}
      </Routes>
    </AnimatePresence>
  </div>
  );
};

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
