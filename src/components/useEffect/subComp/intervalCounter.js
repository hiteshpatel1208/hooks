import React, { useEffect, useState } from 'react'

export default function Intervalcounter(props) {
    
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>
            <h4>Interval Counter</h4>
            <p>Counter: {count}</p>
        </>
    )
}
