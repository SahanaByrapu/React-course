import { render, screen} from "@testing-library/react";
import React from "react";
import {Header} from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
     render(
     <BrowserRouter>
       <Provider store={appStore}>
         <Header />
       </Provider>
     </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name: "Login"});

    // Assertion
    expect(loginbutton).toBeInTheDocument();

});



it("Should load Header Component with a cart items zero", () => {
     render(
     <BrowserRouter>
       <Provider store={appStore}>
         <Header />
       </Provider>
     </BrowserRouter>
    );

const cartItems = screen.getByText("Cart - (0 items)");

    // Assertion
    expect(cartItems).toBeInTheDocument();

});


it("Should change  Login Button to Logout on Click", () => {
     render(
     <BrowserRouter>
       <Provider store={appStore}>
         <Header />
       </Provider>
     </BrowserRouter>
    );

const loginButton = screen.getByRole("button", {name: "login"});

fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", {name: "logout"});


    // Assertion
    expect(logoutButton).toBeInTheDocument();

});
