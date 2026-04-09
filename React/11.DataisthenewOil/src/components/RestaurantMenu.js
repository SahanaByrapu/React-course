import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory.js"
//import {MENU_URL} from "./utils/constants";
import {Link} from "react-router-dom";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    const dummy ="dummy"

    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex, setshowIndex] = useState(0);

   
     if (resInfo == null ) return <Shimmer /> 

     //const {name, cuisines, costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info?.name
   
     //const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGUlAR?.cards[1]?.card?.cards
     
     //{itemCards[0].card.info.name}

     //{itemCard.map((item) =>  <li key="">{item.card.info.name}<li> )}

     //{itemCard.map((item) =>  <li key=item.card.info.id>({item.card.info.name}-{"-Rs."}
     //                           { item.card.info.price / 100 || item.card.info.deafultPrice/100 }
     //                          <li> )}
     // const catagories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter (
     //  (c) => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presenting.food.v2.ItemCategory");
     // console.log("Item Category")

      return (
        <div className="text center">
            <h1 className="font-bold my-10 text-2xl"> Name of the Restaurant </h1>
            <p className="font-bold text-lg">
              {cuisnes.join(",")} - {costForTwomessage}   
            </p>

            {/* categories accordions */}

            {categories.map((category,index)=>
                { 
                    //Controlled component
                    return  (< RestaurantCategory 
                            key={category?.card?.card.name}  
                            data={category?.card?.card} 
                            showItems={index == 1? true:false} 
                            setshowIndex={()=>setshowIndex(index)}/>)
                })}

       
        </div>
    );
};

export default RestaurantMenu;