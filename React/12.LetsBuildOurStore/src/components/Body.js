import RestaurantCard, {withPromotedLabel} from "./RestaurantCard.js";
import {resList} from "../utils/mockData.js";
import { useState, useEffect,useContext} from "react";
import {resList} from "../utils/mockData.js";
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js"

const Body = () => {

    //Local State variable - Super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    const [ filteredRestaurant, setFilteredRestaurant] = useState(resList);

    // useEffect ( Callback function, dependency array)
    const [ searchText, setSearchText] =  useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component )
    console.log("body re-rendered");


    // Call back function is called once the component is rendered by Body component

    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://maps.google.com/maps/api/js?v=quarterly&key=AIzaSyAAOA4pDSaA36HRTFGNCxqeYTEqyn1iUJU&channel=consumer_web&libraries=places,geometry,drawing&region=US&language=en&loading=async");
        
        const json = await  data.json();

        console.log(json);

        listOfRestaurants.filter();
        // Optional Chaining
        setlistOfRestaurants(json.data?.cards[2]?.data?.data?.cards);

        setFilteredRestaurant(json.data?.cards[2]?.data?.data?.cards);

    }


    const onlineStatus = useOnlineStatus();

    if(onlineStatus== false) return <h1> looks like you are offline, check your internet status</h1>

    const { setUserName,loggedInUser} = useContext(UserContext);

    if(listOfRestaurants.length==0)
    {
      
       return <Shimmer/>;
    }

    return (
        <div className="body">
          <div className="filter flex">

             <div className="search m-4 p-4 w-[250px]" > 
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) => { setSearchText(e.target.value)}}
                ></input>
                 <button className="px-4 py-2 bg-gray-100"
                 onClick = { ()=>
                     {
                        const filteredListOfRestuarants= listOfRestaurants.filter(
                            (res) => ( res.Restaurant_Name.toLowerCase().includes(searchText.toLowerCase()))
                     );

                    setFilteredRestaurant(filteredListOfRestuarants);
                    }
                 }> Search </button>

                 <div className="search m-4 p-4 flex items-center">
                 </div>
               
                 <div className="search m-4 p-4 flex items-center">
                    <label>UserName:</label>
                    <input className="border border-black" 
                           value={loggedInUser}
                          onChange={(e)=> setUserName(e.target.value)}></input>
                 </div>
                <button className="px-4 py-2  bg-green-100 m-4" 
                   onClick={ ()=> 
                        { //Filter logic here
                          const filteredList=listOfRestaurants.filter(
                          (res)=> (res.Ratings > 4)
                          );
                          
                          console.log(searchText);

                          setlistOfRestaurants(filteredList);
                        }}>
             Top Rated Restaurants</button>
            </div>
      
             <div className="flex wrap">           
              {filteredRestaurant.map((restaurant) => {
                   <Link 
                   key= {restaurant.id} 
                   to={"/restaurants/"+restaurant.id}> 

                   {
                         restaurant.promoted? <RestaurantCardPromoted   resData={restaurant}/>: 
                   
                        <RestaurantCard   resData={restaurant}/> 
                    }
                    </Link>
                 })}
            </div>
          </div>
        </div>
    )
}

export default Body;


// whenever state variable is changed, react re-renders the component.
// Whenever data layer is updated, react re-renders the UI layer.

