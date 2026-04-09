
import User from "./User.js";
import UserClass from "./UserClass.js";
import {Component} from "react";
import UserContext from "../utils/UserContext.js"

class About extends Component {

    constructor(props){

        super(props);

        console.log( "Parent Constructor");
    }

    componentDidMount() {

        console.log("Parent Component Did Mount");

        // API call
    }

    render() {

        console.log("Parent Render");

        return (

        <div>
            <h1>This is React course </h1>
             <div>
                LoggedIn User
                <UserContext.Consumer>
                 {({loggedInUser}) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>)}                          
                </UserContext.Consumer>
            </div>   
            <UserClass name={"Amicably Sahana"} location={"CA"}/>   
            <UserClass name={"Sahana Bhargavi"} location={"CA"}/>
        </div>
       );}
    
};

/*

Output:

- Parent Constructor
- Parent Render

  - Amicably Sahana Constructor
  - Amicably Sahana Render

  - Sahana Bhargavi Constructor
  - Sahana Bhargavi Render

  <DOM-UPDATED - IN SINGLE BATCH>

  - Amicably Sahana ComponentDidMount
  - Sahana Bhargavi ComponentDidMount

- Parent ComponentDidMount

*/

export default About;