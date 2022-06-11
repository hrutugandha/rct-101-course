import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { counterInc,counterDec } from '../store/counter/counter.action';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector();



  return (
    <div>
     <h1> counter app : {count}</h1>
     <div>
       <button onClick={() => dispatch(counterInc())}>+</button>
       <button onClick={() => dispatch(counterDec())}>-</button>
     </div>
    </div>
  )
}

export default Counter
