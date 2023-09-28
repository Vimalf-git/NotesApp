import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className='sidebar'>

                <h1 style={{ color: "#203562" }}>Notes App</h1>
                <Link className='side-b-btn' to={'noteslist'} >
                    <img style={{ marginLeft: '1em' }} src='src/image/description.svg' />
                    <span>Notes</span>
                </Link>
            </div>
        </>
    )
}

export default Sidebar