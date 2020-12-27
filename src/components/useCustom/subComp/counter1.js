import React from 'react'
import useCounter from '../hooks/useCounter'

export default function Counter1(props) {
    
    const [count, increment, decrement, reset] = useCounter(0 , 1);

    return (
        <>
            <h4>Counter</h4>
            <p>Count = {count}</p>
            <button type='button' onClick={increment}>Increment</button>
            <button type='button' onClick={decrement}>Decrement</button>
            <button type='button' onClick={reset}>Reset</button>
        </>
    )
}
