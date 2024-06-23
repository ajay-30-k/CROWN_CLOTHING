// AdminRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { selectCurrentUser } from "./redux/user/UserSelector";
import { selectCurrentUser } from "../redux/user/UserSelector";

const AdminRoute = ({ currentUser, element: Element, ...rest }) => (
  <Route
    {...rest}
    element={
      currentUser && currentUser.isAdmin ? (
        <Element />
      ) : (
        <Navigate to="/" replace />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AdminRoute);
