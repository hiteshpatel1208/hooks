import React from 'react'
import Counter from './subComp/counter'

export default function Usememohook(props) {
    

    return (
        <>
            <h1>This is useMemo Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Counter />
                </div>
            </div>
        </>
    )
}
