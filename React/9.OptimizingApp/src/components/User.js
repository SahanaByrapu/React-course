import {useState} from "react";

const User = (props) => {

    const [count1, setCount1]= useState(0);
    const [count2, setCount2]= useState(1);

    useEffect (()=>{
      //API Calls
      setInterval(()=>{
        console.log("Namaste React OP");
       }, 1000);

       return () =>{
         clearInterval(this.timer);
       }
    },[count]);

    //async function getUserInfo () {

   //   const data = await ; 
   // }

    return  (
     <div className="user-card">
      <h1>Count1: {count1}</h1>
      <button onClick={()=>{
        return count1=setCount1(count1+1);
      }}>Increase the count1</button>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: San Jose</h3>
      <h4>Contact: sahana@gmail.com</h4>
    </div>
    );
};

export default User;