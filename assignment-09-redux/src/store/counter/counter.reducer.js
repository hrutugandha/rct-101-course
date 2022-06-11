
export const counterReducer =  (state={count:0},type,payload) => {
    switch (type) {
        case INCREMENT_COUNTER: {
            state.count++;
            return  {...state}
        }
        case DECREMENT_COUNTER: {
            state.count--;
            return  {...state}
        }
        default: {
            return state;
        }
    }
};