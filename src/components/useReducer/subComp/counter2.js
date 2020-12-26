import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.val }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.val }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.val }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.val }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export default function Counter2(props) {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h4>Complex State</h4>
            <p>First Counter - {count.firstCounter}</p>
            <p>Second Counter - {count.secondCounter}</p>
            <button type='button' onClick={() => dispatch({ type: 'increment', val: 1 })}>Increment1</button>
            <button type='button' onClick={() => dispatch({ type: 'decrement', val: 1 })}>Decrement1</button>
            <br />
            <button type='button' onClick={() => dispatch({ type: 'increment2', val: 5 })}>Increment2</button>
            <button type='button' onClick={() => dispatch({ type: 'decrement2', val: 5 })}>Decrement2</button>
            <br />
            <button type='button' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}
