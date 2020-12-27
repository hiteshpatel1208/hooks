import React from 'react'
import useInput from '../hooks/useInput';

export default function UserForm(props) {
    
    const [fName, bindFName, resetFName]= useInput('');
    const [lName, bindLName, resetLName]= useInput('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${fName} ${lName}`);
        resetFName();
        resetLName();
    }


    return (
        <>
            <h4>User Form</h4>
            <form  onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type='text' placeholder='First Name' {...bindFName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' placeholder='Last Name' {...bindLName}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
