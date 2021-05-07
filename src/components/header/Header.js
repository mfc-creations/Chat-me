import React from "react";
import Logo from "../../assets/logo.png";
import Signout from "../../assets/signout.png";
import "./Header.css";

const Header = ({ auth, user }) => {
  return (
    <header>
      <img src={Logo} alt="" className="logo" />
      {user && <img src={Signout} alt="" onClick={() => auth.signOut()} />}
    </header>
  );
};

export default Header;
