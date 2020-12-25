import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../useContextHook';
import ComponentE from './componentE'

export default function ComponentD(props) {
    
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div style={{marginTop: 20}}>
            <p>This is Component D. Consuming Context using useContext</p>
            <p> {user} - {channel}</p>
            <p>&#8595;</p>
            <ComponentE />
        </div>
    )
}
