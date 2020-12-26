import React, { useEffect, useRef, useState } from 'react'

export default function Timer(props) {

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => { 
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <>
            <h4>Timer</h4>
            <p>Counter - {timer}</p>
            <button type='button' onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </>
    )
}
