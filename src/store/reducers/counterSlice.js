import { createSlice } from "@reduxjs/toolkit";
import {incrementAction, decrementAction, changeByParamsAction} from "../actions/counterAction"

const initialstate = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialstate,
    reducers:{
        increment : incrementAction,
        decrement : decrementAction,
        changevalue: changeByParamsAction
    }
})

export const {increment, decrement, changevalue} = counterSlice.actions;

export default counterSlice.reducer;