import React from "react";
import Google from "../../assets/google.png";
import "./SignIn.css";
import firebase from "firebase/app";
const SignIn = ({ auth }) => {
  const signInWithGoogle = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <p>Sign in to start chat..!!</p>
      <button className="signin-btn" onClick={signInWithGoogle}>
        <img src={Google} alt="" />
        <span>Sign in with google</span>
      </button>
    </div>
  );
};

export default SignIn;
