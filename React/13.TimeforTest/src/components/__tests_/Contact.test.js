import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Cases", () =>{

it ("Should load contact as component", () => { 

render(<Contact />);

const heading = screen.getByRole("heading");

// Assertion
expect(heading).toBeInTheDocument();

} );

it ("Should load button inside contact component", () => { 

render(<Contact />);

const button = screen.getByRole("button");

// Assertion
expect(button).toBeInTheDocument();

} );

/*test ("Should load input name inside contact component", () => { 

render(<Contact />);

const inputName = screen.getAllByPlaceholderText("Enter name");

// Assertion
expect(inputName).toBeInTheDocument();

} );*/

it ("Should load two input boxes on the contact component", () => { 

render(<Contact />);

// Querying
const inputBoxes = screen.getAllByRole("textbox"); // returns JSX/React element/Virtual-DOM

console.log(inputBoxes.length);

// Assertion
expect(inputBoxes.length).not.toBe(4);

} );

});