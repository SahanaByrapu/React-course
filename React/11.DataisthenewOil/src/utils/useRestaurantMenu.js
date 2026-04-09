import { useEffect } from "react";

const useRestaurantMenu = (resId) => {

    //fetchdata

const [resInfo,setResInfo] = useState(null);

    useEffect (() =>{
        fetchData();        
    }, [])

    const fetchData= async () => {
     const data = await fetch (MENU_API + resId);

     const jsondata= await data.json();

      setResInfo(jsondata);

    }

    return resInfo;
}

export default useRestaurantMenu;