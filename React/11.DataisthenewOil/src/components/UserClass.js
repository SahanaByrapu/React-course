import React from "react";

class UserClass extends React.Component {
 
    constructor (props)
    {
        super(props);

        this.state = {
           userInfo : {       
            name: "Dummy",
            location:"Default",
           }
        };

        console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount() {


        console.log(this.props.name + "Child Component Did Mount");

        // API Calls 

        const data = await fetch("APILINK");

       const jsondata= await data.json();

       this.setState({
         userInfo : jsondata,
       })

       console.log(jsondata);

       this.timer=setInterval(()=>{
        console.log("Namaste React OP");
       }, 1000);
    }

   componentDidUpdate() {

    console.log("component did update");
   }

   componentWillUnmount(){

    clearInterval(this.timer);
    console.log("component did unamount");
   }
     
    render() { 
        const {name, location,avatar_url}= this.state.userInfo;

        debugger;


     //console.log("Child Render")
        
    return  (
    <div className="user-card">
      <img src={avatar_url} />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: sahana@gmail.com</h4>
    </div>
    );

   }   

}

export default UserClass;


/****
 * 
 * -------- MOUNTING ---------
 * 
 * 
 * Constructor (dummy)
 * Render (dummy)
 *          <HTML dummy >
 * Component Did Mount
 *       <API Call>
 *       <this.setState>
 * 
 *      State variable is updated
 * setState() => triggers reconciliation, update cycle is called
 * 
 * ---------- UPDATE  -----------      
 *  
 *          render(API data)
 *          <HTML (new API data)>
 * componentDidUpdate 
 * 
 * --------- UNMOUNT ----------------
 * 
 * 
 * 
 * 
 * 
 */

