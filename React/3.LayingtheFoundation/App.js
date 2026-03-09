import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => ReactElement - JS Object => HTMLElement (render) 
const heading = React.createElement("h1",  {id:"heading"}, "Hello React!!" );

// JSX => Java Script Syntax to create React Elements in easy manner
// JSX. => not HTML in JS, but HTML or XML like syntax
//Transpilation : transpiled before it reached the JS -PARCEL-Babel
// Babel transpiles it to React.createElement()
// JSX Element => ReactElement-JS Object -=> JS Object

const jsxheading = ( <h1  className="head"> Hello React World! 
 </h1>);

console.log(jsxheading);

// React Component
// Class based Component - OLD
// Functional Component - NEW

//React Functional Component 

const Title = () => (
 <h1 className="head" tabIndex="6"> 
    Hello React using JSX
  </h1>
);

const HeadingComponent2= () => {
    return <h1>Hello World React Functional Component</h1> ;
};

const number=10000;

const HeadingComponent = () => (
    <div id="container">
     <Title />
    <Title> </Title>
     <h1>Hello World React Functional Component</h1>
     {number} 
     <h2>More Features</h2>
     {1100+300}
    </div>
);

const HeadingComponent3= () => <h1>Hello World React Functional Component</h1> ;


const fn1 = () => true; 
const fn2 = () => {return true}; 

const root= ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading);


root.render(<HeadingComponent />);




