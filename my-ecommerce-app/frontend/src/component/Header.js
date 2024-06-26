import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        height="100px"
        alt="logo"
      />
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Productpage">Products</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
    
  );
}
export default Header;
