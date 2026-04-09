import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Cart from "./components/Cart.js"
//import Grocery from "./components/Grocery";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import {useState, useEffect} from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js"


// not using keys (not acceptable) >>> using index as key >>>>>>> unique id (best practice)


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Grocery= lazy(()=>import("./components/Grocery.js"));

const AppLayout = () => {

  //authentication

   const [userName, setUserName] = useState();
   
   useEffect(()=>{
    // Make an api call and send username and password

    const data = {
      name: "Sahana Bhargavi"
    }

    setUserName(data.name);

   }, [])

  return (
    //Default
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
             {/* // Sahana Bhargavi */}
            <div className="app">
              <Header />
               {/** if path = /  */}
              <Outlet />
             </div>
        </UserContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
{
  path : "/", 
  element: <AppLayout />,
  children: [
   {    
    index:true,
    element: <Body />,
  },
  {   
    path:'about',
    element: <About />,
  },
  {
    path : 'contact',
    element: <Contact />,
  },
  {
    path: 'grocery',
    element: ( <Suspense fallback={<h1> Loading Screen!!</h1>}> 
    <Grocery /> 
    </Suspense> ),
  },
  {
    path : 'restaurants/:resId',
    element: <RestaurantMenu />,
  },
  {
    path : 'cart',
    element: <Cart />,
  },
  {
    path: ' ',

  }
  ],
  errorElement: <Error/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);