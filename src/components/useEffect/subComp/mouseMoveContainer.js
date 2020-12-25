import React, { useState, useEffect } from 'react';

function Mousemove(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('Mouse Move Container Log');
        window.addEventListener('mousemove', logMousePosition);

        // CleanUp function. Serves as ComponentWillUnmount()
        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </>
    )
}

export default function Mousemovecontainer(props) {

    const [display, setDisplay] = useState(true);

    return (
        <>
            <h4>Mouse Move Container</h4>
            <h5>componentWillUnmount() replication</h5>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && (
                <>
                    <Mousemove />
                </>
            )}
        </>
    )
}
