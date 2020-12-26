import React, { useEffect, useRef } from 'react'

export default function Focusedinput(props) {
    
    const inpRef = useRef(null);

    useEffect(() => {
        // focus on input element
        inpRef.current.focus()
    }, []);

    return (
        <>
            <h4>Focued Input on page load</h4>
            <input type='text' ref={inpRef} />
        </>
    )
}
