import React from 'react';
import { ChannelContext, UserContext } from '../useContextHook';

export default function ComponentE(props) {
    
    return (
        <div style={{marginTop: 20}}>
            <p>This is Component E. Consuming Context without useContext</p>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => `${user} - ${channel}`
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
