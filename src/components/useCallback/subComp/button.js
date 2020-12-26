import React from 'react'

function Button(props) {
    

    return (
        <>
            {console.log(`Button for ${props.children} rendered`)}
            <button type="button" onClick={props.handleClick}>
                {props.children}
            </button>
        </>
    )
}

export default React.memo(Button);
