import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Doctitle2(props) {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <>
            <h4>Updating document title - Uses useDocumentTitle hook.</h4>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}