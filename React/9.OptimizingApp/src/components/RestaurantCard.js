import {CDN_URL} from "../utils/constants" ;


const RestaurantCard =(props) => {

    const {resData}=props;
    return (
        <div className="res-card" >       
        <img className="res-logo"  src={CDN_URL} alt="res-logo" />
           <h4> {resData.Restaurant_Name}</h4>
          <h5>{resData.Ratings}</h5>
          <h5>{resData.Cost_for_two}$ FOR TWO</h5>      
        </div>
    );
};


export default RestaurantCard;

