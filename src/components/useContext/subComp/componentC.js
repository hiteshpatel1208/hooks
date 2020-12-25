import React from 'react'
import ComponentD from './componentD'

export default function ComponentC(props) {
    

    return (
        <div style={{marginTop: 20}}>
            <p>This is Component C. Wrapped around by context provider</p>
            <p>&#8595;</p>
            <ComponentD />
        </div>
    )
}
