import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state, action) => {

            // Vanilla (older) Redux => DON'T MUTATE STATE, returning was mandatory
            //  const newState = [...state];
            //  newState.items.push(action.payload);
            //  return newState;

            //  Redux Toolkit
            //  We have to mutate the state 
                state.items.push(action.payload);
            },

            removeItem: (state, action ) => {
                state.items.pop();
            },

            // originalState = {items: ["pizza"]}
            clearCart: (state,action) => {
                
                //RTK - either mutate the existing state or return a new State

                //state.items.length=0; // state=[]

                return {items: []}; // this new [] will be replaced with orginialState=[]
            },
        },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;