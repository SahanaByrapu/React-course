import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - RestuarantContainer
 *    - RestuarantCard
 *      -Image
 *      -Name of Res, Star Rating, cuisines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./assets/logo.png" alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard =(props) => {

    const {resData}=props;
    return (
        <div className="res-card" >       
        <img className="res-logo"  src="./assets/lresname-cal-pizza.avif" alt="res-logo" />
           <h4> {resData.Restaurant_Name}</h4>
          <h5>{resData.Ratings}</h5>
          <h5>{resData.Cost_for_two/100} FOR TWO</h5>      
        </div>
    );
};

const resObj =[
   {
        "Restaurant_Name": "Sample Restaurant 1",
        "URL": "https://www.sample-restaurant1.com",
        "Timing": "10:00 AM - 10:00 PM",
        "Address": "123 Main Street, Sample City",
        "Location": "Sample Location",
        "City": "Sample City",
        "Offer": "10% off on orders over $50",
        "Contact_Number": "+1 123-456-7890",
        "Cost_for_two": 40,
        "Restaurant_Type": "Cuisine Type 1",
        "Ratings": 4.5
    },
    {
        "Restaurant_Name": "Sample Restaurant 2",
        "URL": "https://www.sample-restaurant2.com",
        "Timing": "11:00 AM - 9:00 PM",
        "Address": "456 Elm Street, Another City",
        "Location": "Another Location",
        "City": "Another City",
        "Offer": "Free dessert with every meal",
        "Contact_Number": "+1 987-654-3210",
        "Cost_for_two": 30,
        "Restaurant_Type": "Cuisine Type 2",
        "Ratings": 4.0
    }
]
const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <RestaurantCard resData= {resObj[0]}/>
            </div>
        </div>
    )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);