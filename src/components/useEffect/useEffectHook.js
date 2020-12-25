import React from 'react'
import Datafetching from './subComp/dataFetching'
import Intervalcounter from './subComp/intervalCounter'
import Mousemove from './subComp/mouseMove'
import Mousemovecontainer from './subComp/mouseMoveContainer'
import Simplecounter from './subComp/simpleCounter'

export default function Useeffecthook(props) {
    return (
        <>
            <h1>This is useEffect Hook.</h1>
            <div className="hook-container">
                <div className="hook-subcontainer">
                    <Simplecounter />
                </div>
                <div className="hook-subcontainer">
                    <Mousemove />
                </div>
                <div className="hook-subcontainer">
                    <Mousemovecontainer />
                </div>
                <div className="hook-subcontainer">
                    <Intervalcounter />
                </div>
                <div className="hook-subcontainer">
                    <Datafetching />
                </div>
            </div>
        </>
    )
}
