import React, { useContext } from 'react'
import { CountContext } from '../counter4'

export default function ComponentA(props) {
    
    const countContext = useContext(CountContext);

    return (
        <div>
            <p>Component A - {countContext.countState}</p>
            <button type='button' onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button type='button' onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button type='button' onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
