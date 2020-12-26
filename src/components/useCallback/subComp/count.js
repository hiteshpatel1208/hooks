import React from 'react'

function Count(props) {
    

    return (
        <>
            {console.log(`Text for ${props.text} rendered`)}
            <p style={{marginTop: 10}}>{props.text} - {props.count}</p>
        </>
    )
}

export default React.memo(Count);
