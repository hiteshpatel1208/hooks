import React, { useState, useCallback } from 'react'
import Title from './title';
import Count from './count';
import Button from './button';

export default function Parentcomponent(props) {
    
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        // returns memoised function to prevent render related to salary
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        // returns memoised function to prevent render related to age
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <>
            <Title />
            <Count text={'Age'} count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={'Salary'} count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </>
    )
}
