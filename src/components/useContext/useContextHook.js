import React from 'react';
import ComponentC from './subComp/componentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function Usecontexthook(props) {
    

    return (
        <>
            <h1>This is useContext Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <UserContext.Provider value={'HiTESH'}>
                        <ChannelContext.Provider value={'HiTESH\'s Channel'}>
                            <ComponentC />
                        </ChannelContext.Provider>
                    </UserContext.Provider>
                </div>
            </div>
        </>
    );
}
