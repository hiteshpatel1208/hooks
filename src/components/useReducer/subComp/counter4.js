import React, { useReducer } from 'react'
import ComponentC from './withUseContextCounter4/componentC'
import ComponentA from './withUseContextCounter4/componentA'
import ComponentB from './withUseContextCounter4/componentB'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
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

export const CountContext = React.createContext();

export default function Counter4(props) {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h4>useReducer with useContext (Redux)</h4>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <p style={{ marginBottom: 10 }}>Count = {count}</p>
                <div style={{ display: 'flex' }}>
                    <ComponentA />
                    <ComponentB />
                    <ComponentC />
                </div>
            </CountContext.Provider>
        </>
    )
}
