import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState} from "react";
import {resList} from "../utils/mockData";

const Body = () => {

    //Local State variable - Super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

   
    // Normal State variable
    //let listOfRestaurants = [];
     //setlistOfRestaurants([])
     // const [listOfRestaurants, setlistOfRestaurants] = arr;

    // Normal JS variable
   /** let listOfRestaurants = [
    //    {
            "Restaurant_Name": "Sample Restaurant 1",
            "id":"1234",
            "URL": "https://www.sample-restaurant1.com",
            "Timing": "10:00 AM - 10:00 PM",
            "Address": "123 Main Street, Sample City",
            "Location": "Sample Location",
            "City": "Sample City",
            "Offer": "10% off on orders over $50",
            "Contact_Number": "+1 123-456-7890",
            "Cost_for_two": 400,
            "Restaurant_Type": "Cuisine Type 1",
            "Ratings": 4.5
        },
    
        {
            "Restaurant_Name": "Sample Restaurant 1",
            "id":"1235",
            "URL": "https://www.sample-restaurant1.com",
            "Timing": "10:00 AM - 10:00 PM",
            "Address": "123 Main Street, Sample City",
            "Location": "Sample Location",
            "City": "Sample City",
            "Offer": "10% off on orders over $50",
            "Contact_Number": "+1 123-456-7890",
            "Cost_for_two": 500,
            "Restaurant_Type": "Cuisine Type 1",
            "Ratings": 4.0
        }];*/ 

    return (
        <div className="body">
          <div className="filter">
             <button className="filter-btn" 
             onClick={ ()=> 
                { //Filter logic here
                    const filteredList=listOfRestaurants.filter(
                        (res)=> (res.Ratings > 4)
                    );

                   setlistOfRestaurants(filteredList);
             }}>
             Top Rated Restaurants</button>

             <div className="search"> Search</div>
             <div className="res-container">           
              {listOfRestaurants.map((restaurant) => {
                   return <RestaurantCard  key= {restaurant.id} resData={restaurant} />
                  })}
            </div>
          </div>
        </div>
    )
}

export default Body;


// whenever state variable is changed, react re-renders the component.
// Whenever data layer is updated, react re-renders the UI layer.

