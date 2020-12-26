import React from 'react'

function Title(props) {
    

    return (
        <>
            {console.log('Title rendered')}
            <h4>useCallback demo</h4>
        </>
    )
}

export default React.memo(Title);
