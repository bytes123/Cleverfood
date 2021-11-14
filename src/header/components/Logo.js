import React,{memo} from 'react'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        <div className="header_logo-menu p-x-2">
            <Link to="/cleverfood" className="header_logo-link">CLEVERFOOD</Link>
        </div>
    )
}
export default memo(Logo)