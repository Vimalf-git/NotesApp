import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import notesIcon from '../image/description.svg'

function Sidebar() {
    return (
        <>
            <div className='sidebar'>

                <h1 style={{ color: "#203562" }}>Notes App</h1>
                <Link className='side-b-btn' to={'notesCard'} >
                    <img style={{ marginLeft: '1em' }} src={notesIcon   } />
                    <span>Notes</span>
                </Link>
            </div>
        </>
    )
}

export default Sidebar