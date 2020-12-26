import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const reducer2 = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 5;
        case 'decrement':
            return state - 5;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function Counter3(props) {
    
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer2, initialState);

    return (
        <>
            <h4>Multiple useReduce</h4>
            <p>Counter1 - {count}</p>
            <button type='button' onClick={() => dispatch('increment')}>Increment</button>
            <button type='button' onClick={() => dispatch('decrement')}>Decrement</button>
            <button type='button' onClick={() => dispatch('reset')}>Reset</button>
            <br />
            <br />
            <p>Counter2 - {count2}</p>
            <button type='button' onClick={() => dispatch2('increment')}>Increment</button>
            <button type='button' onClick={() => dispatch2('decrement')}>Decrement</button>
            <button type='button' onClick={() => dispatch2('reset')}>Reset</button>
        </>
    )
}
