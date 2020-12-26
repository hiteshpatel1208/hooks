import React from 'react'
import Parentcomponent from './subComp/parentComponent'

export default function Usecallbackhook(props) {
    

    return (
        <>
            <h1>This is useCallback Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Parentcomponent />
                </div>
            </div>
        </>
    )
}
