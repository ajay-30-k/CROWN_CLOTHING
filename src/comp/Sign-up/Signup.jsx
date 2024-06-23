import React, { useState } from "react";
import "./Signup.scss";
import { auth, createUserProfileDocument } from "../firebase/Firebase.utils";
import Custombutton from "../custombutton/Custombutton";
import Forminput from "../form-input/Forminput";

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(userCredentials); // Log user credentials

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log("User created:", user);
      await createUserProfileDocument(user, { displayName });
      console.log("User profile created in Firestore");

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Signup with your email and password</span>
      <form className="sign-up" onSubmit={handleSubmit}>
        <Forminput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Name"
          required
        />
        <Forminput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <Forminput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <Forminput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <button className="custom-button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
