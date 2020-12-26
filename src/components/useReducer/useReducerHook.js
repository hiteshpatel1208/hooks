import React from 'react'
import Datafetching2 from './subComp/dataFetching2'
import Counter1 from './subComp/counter1'
import Counter2 from './subComp/counter2'
import Counter3 from './subComp/counter3'
import Counter4 from './subComp/counter4'
import Datafetching1 from './subComp/dataFetching1'

export default function Usereducerhook(props) {
    

    return (
        <>
            <h1>This is useReducer Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Counter1 />
                </div>
                <div className="hook-subcontainer">
                    <Counter2 />
                </div>
                <div className="hook-subcontainer">
                    <Counter3 />
                </div>
                <div className="hook-subcontainer">
                    <Counter4 />
                </div>
                <div className="hook-subcontainer">
                    <Datafetching1 />
                </div>
                <div className="hook-subcontainer">
                    <Datafetching2 />
                </div>
            </div>
        </>
    )
}
