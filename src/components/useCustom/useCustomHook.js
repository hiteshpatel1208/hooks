import React from 'react'
import Counter1 from './subComp/counter1'
import Counter2 from './subComp/counter2'
import Doctitle1 from './subComp/docTitle1'
import Doctitle2 from './subComp/docTitle2'
import UserForm from './subComp/userForm'

export default function Usecustomhook(props) {
    

    return (
        <>
            <h1>This is useCustom Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Doctitle1 />
                </div>
                <div className="hook-subcontainer">
                    <Doctitle2 />
                </div>
                <div className="hook-subcontainer">
                    <Counter1 />
                </div>
                <div className="hook-subcontainer">
                    <Counter2 />
                </div>
                <div className="hook-subcontainer">
                    <UserForm />
                </div>
            </div>
        </>
    )
}
