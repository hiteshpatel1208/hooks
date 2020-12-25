import React, { useEffect, useState } from 'react'

export default function Simplecounter(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        // Calling only when count is updated by adding count into the dependency array.
        console.log('Simple Counter Log - document title updated');
        document.title = `clicked ${count}`;
    }, [count]);

    return (
        <>
            <h4>Simple Counter</h4>
            <p>Count: {count}</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}
