import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import  MOCK_DATA_NAME from "../mocks/";


global.fetch = jest.fn( () => 

   Promise.resolve ({
        json: () => {
          Promise.resolve(MOCK_DATA_NAME),
        } 
    })
);

it("should load restaurant menu component" , async () => {

    await act ( async () => render(
        <BrowserRouter>
        <Provider>
             <Header/>
             <RestaurantMenu /> 
             <Cart/>
        </Provider>
        </BrowserRouter>
        ));

    const accordionHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordionHeader);


    expect(screen.getAllByTestId("foodItems").length).ToBe(5);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
    const addBtns = screen.getAllByRole("button", {name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    console.log(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart is empty. Add Items to the cart")).ToBeInTheDocument();

});