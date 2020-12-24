import React, { useState } from 'react'

export default function Usestatehook(props) {
    const [count, setCount] = useState(0);

    const initialCount = 0;
    const [count2, setCount2] = useState(initialCount);

    const [name, setName] = useState({ fName: '', lname: '' });

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
    }

    return (
        <>
            <h1>This is useState Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <h4>useState with simple increment counter</h4>
                    <p>Counter 1: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
                <div className="hook-subcontainer">
                    <h4>useState with increment/decrement/reset counter that using prevState as function to setter function</h4>
                    <p>Counter 2: {count2}</p>
                    <button onClick={() => setCount2(initialCount)}>Reset</button>
                    <button onClick={() => setCount2(prevCount2 => prevCount2 + 1)}>Increment</button>
                    <button onClick={() => setCount2(prevCount2 => prevCount2 - 1)}>Descrement</button>
                </div>
                <div className="hook-subcontainer">
                    <h4>useState with Object</h4>
                    <p>First Name: {name.fName}</p>
                    <p>Last Name: {name.lName}</p>
                    <form>
                        <input type="text" value={name.fName} onChange={e => setName({ ...name, fName: e.target.value })} />
                        <input type="text" value={name.lName} onChange={e => setName({ ...name, lName: e.target.value })} />
                    </form>
                </div>
                <div className="hook-subcontainer">
                    <h4>useState with Array</h4>
                    <ul>
                        {
                            items.map(item => <li key={item.id}>{item.value}</li>)
                        }
                    </ul>
                    <button onClick={addItem}>Add a number</button>
                </div>
            </div>
        </>
    );
}
