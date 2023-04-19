import React from 'react'
import {decrement, increment} from "../store/reducers/counterSlice"
import { useDispatch, useSelector } from 'react-redux'

const index = () => {

  const dispatch = useDispatch();

  const {value} = useSelector(state=>
     state.counterReducer
  );
  return (
    <div >
    <button onClick={() => dispatch(decrement())}>-</button>
    <span>{value}</span>
    <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default index