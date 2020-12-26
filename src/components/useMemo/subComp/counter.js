import React, { useMemo, useState } from 'react'

export default function Counter(props) {
    
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = () => {
        setCount1(count1 + 1);
    }

    const increment2 = () => {
        setCount2(count2 + 1);
    }

    const isEven = useMemo(() => {
        //returns memoised value of count1 that doesn't slowdown count2 increment.
        let i = 0;
        while( i < 2000000000) i++;
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <>
            <button onClick={increment1}>Count 1 - {count1}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={increment2}>Count 2 - {count2}</button>
        </>
    )
}
