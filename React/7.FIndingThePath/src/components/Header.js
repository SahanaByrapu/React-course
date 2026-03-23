import {LOGO_URL} from  "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const Header = () => {

   // let btnName ="Login";

  //Local State Variables
  const [ btnNameReact, setBtnNameReact ] = useState("Login");
  console.log("Header render");

  // If ther is no dependency array => useEffect is called on every render
   
  // If the dependency array is empty = [] => useEffect is called on initial render (just once)

  // If the dependency array is [btnNameReact] => useEffect is called for every update on btnNameReact.

  useEffect(() => {
    console.log("useEffect called");
  },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img 
              className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick= { () => { 
            btnNameReact == "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }} > {btnNameReact} </button>
        </ul>
      </div>
    </div>
  );
};

