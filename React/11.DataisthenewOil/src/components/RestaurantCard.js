import {CDN_URL} from "../utils/constants" ;


const RestaurantCard =(props) => {

    const {resData}=props;
    return (
        <div className="m4 p4 w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200"> 

        <img className="rounded-lg"  alt="res-logo" src={CDN_URL}/>
           <h4 className="font-bold py-4 text-lg">  {resData.Restaurant_Name}</h4>
          <h5>{resData.Ratings}</h5>
          <h5>{resData.Cost_for_two}$ FOR TWO</h5>      
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => output  RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {

    return () => {

        return (
            <div>
                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Promoted </label> 
                 <RestaurantCard  {...props}/>  
            </div>
        )
    }
}

export default RestaurantCard;

