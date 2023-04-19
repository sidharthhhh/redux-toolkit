import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialstate,
    reducers: {
        increment: (state, action) =>{
            state.value += 1;
        },

        decrement: (state, action) =>{
            state.value -= 1;
        }
    }
});

export const {decrement, increment} = counterSlice.actions;
export default counterSlice.reducer;