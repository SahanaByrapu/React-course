import {LOGO_URL} from  "../utils/constants.js";
import {useState, useEffect, useContext} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";


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

  const onlineStatus=useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  console.log(loggedInUser);


  // Selector
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex justify between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img 
              className="w-56" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex item-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus: { onlineStatus? "Green" : "Red" } </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
            <li>
            <Link to="/grocery">Grocery</Link></li>
      
          
          <li className="px-4 font-bold text-xl">Cart -{cartItems.length} items </li>

          <button className="login" onClick= { () => { 
            btnNameReact == "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
            }} > {btnNameReact} </button>
        </ul>

          <li> {loggedInUser}</li>
      </div>
    </div>
  );
};

