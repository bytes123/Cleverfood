import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
export default function Spinner({
    type
    }) {
    return (
        <div className="spinner">
            <ReactBootstrap.Spinner animation="border" variant={`${type ? type : "success"}`} />
        </div>
    )
}
