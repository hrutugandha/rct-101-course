import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './counter.types'

export const counterInc = () => ({type: COUNTER_INCREMENT});
export const counterDec = () => ({type: COUNTER_DECREMENT});

