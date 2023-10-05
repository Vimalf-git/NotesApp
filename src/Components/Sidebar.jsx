import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import notesIcon from '../image/description.svg'
import { NotesDataContext } from './NotesContext'

function Sidebar() {
    const{navigate}=useContext(NotesDataContext)
    return (
        <>
            <div className='sidebar'>

                <h1 style={{ color: "#203562",cursor: 'pointer' }} onClick={()=>{navigate('/')}}>Notes App</h1>
                <Link className='side-b-btn' to={'notesCard'} >
                    <img style={{ marginLeft: '1em' }} src={notesIcon   } />
                    <span>Notes</span>
                </Link>
            </div>
        </>
    )
}

export default Sidebar