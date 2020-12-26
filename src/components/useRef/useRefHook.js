import React from 'react'
import Focusedinput from './subCompo/focusedInput'
import Timer from './subCompo/timer'

export default function Userefhook(props) {
    

    return (
        <>
            <h1>This is useRef Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Focusedinput />
                </div>
                <div className="hook-subcontainer">
                    <Timer />
                </div>
            </div>
        </>
    )
}
