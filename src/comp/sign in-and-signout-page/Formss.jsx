import React from "react";
import "./Formss.scss";
import Signin from "../sign-in/Signin";
import Signup from "../Sign-up/Signup";
const Formss = () => {
  return (
   <div className="classforms">
     <div className="sign-in-and-sign-up">
     
     <Signin />
     
       <Signup />
 
 </div>
   </div>
  );
};

export default Formss;
