import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
//import {MENU_URL} from "./utils/constants";
import {Link} from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo]= useState([null]);

    const params = useParams();
    console.log(params);


    useEffect ( () => {
        fetchMenu();
     }, []);

    const fetchMenu = async () => {
        //const data = await fetch("<URL> "+{resId}+"<restofURL>");
        const data = await fetch("")
        const jsondata= await data.json();

        console.log(json);
        setResInfo(json.data);
    };

    

     if (resInfo == null ) return <Shimmer /> 

     //const {name, cuisines, costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info?.name
   
     //const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGUlAR?.cards[1]?.card?.cards
     
     //{itemCards[0].card.info.name}

     //{itemCard.map((item) =>  <li key="">{item.card.info.name}<li> )}

     //{itemCard.map((item) =>  <li key=item.card.info.id>({item.card.info.name}-{"-Rs."}
     //                           { item.card.info.price / 100 || item.card.info.deafultPrice/100 }
     //                          <li> )}
      return (
        <div className="menu">
            <h1> Name of the Restaurant </h1>
            <h2> Menu </h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Pizzas</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;