import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// not using keys (not acceptable) >>> using index as key >>>>>>> unique id (best practice)


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Grocery= lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** if path = /  */}
      <Outlet />
    </div>
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
  ],
  errorElement: <Error/>,
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);