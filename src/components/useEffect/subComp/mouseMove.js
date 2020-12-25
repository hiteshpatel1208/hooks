import React, { useEffect, useState } from 'react'

export default function Mousemove(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        // Calling just once after first ever render call by declaring empty dependency array.
        // Replicating ComponentDidMount();
        console.log('Mouse Move Log');
        window.addEventListener('mousemove', logMousePosition);

        //adding cleanUp function to prevent memory leak on changing component from radio button.
        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <>
            <h4>Mouse Position</h4>
            <h5>componentDidMount() replication</h5>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </>
    )
}
