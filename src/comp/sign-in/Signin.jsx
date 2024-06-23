import React, { useState } from "react";
import "./Signin.scss";
import Forminput from "../form-input/Forminput";
import Custombutton from "../custombutton/Custombutton";
import { auth, signInWithGoogle } from "../firebase/Firebase.utils";

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`Form Data Updated: ${name} = ${value}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        console.log("Form Data Submitted:", formData);

        if (!email || !password) {
            console.log("Email or password is empty");
            return;
        }

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log("User signed in:", userCredential.user);
            setFormData({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log("Error signing in:", error.message);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const userCredential = await signInWithGoogle();
            console.log("User signed in with Google:", userCredential.user);
        } catch (error) {
            console.log("Error signing in with Google:", error);
        }
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span className="title">Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Forminput
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Forminput
                    type="password"
                    name="password"
                    label="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <div className="buttons">
                    <Custombutton type="submit">SIGN IN</Custombutton>
                    <button type="button" className="google-sign-in" onClick={handleGoogleSignIn}>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signin;
