import React, { useContext, useState } from 'react'
import NotesCard from './NotesCard'
import { Button } from 'react-bootstrap'
import { NotesDataContext } from './Context/NotesContext'

function NotesContent() {
    const [title, SetTittle] = useState('')
    const [body, SetBody] = useState('')
    const { data, setData } = useContext(NotesDataContext);

    const addData = () => {
        const newDataVal = [...data];
        if (title === '' || body === '') {
            alert("please fill the note")
        } else {
            newDataVal.push({
                title,
                body,
                editIcon: 'src/image/edit.svg',
                deleteIcon: 'src/image/delete.svg',
                date: "5 days ago"
            })
            setData(newDataVal);

            SetTittle('');
            SetBody('');
        }
    }

    return (
        <>
            <div className='noteCon'>

                <div className='dummy'>
                    <div className='notes-entry'>
                        <h4 style={{ color: "#203562", margin: '2em 0em 0em 2em' }}>Add a Note</h4>
                        <input className='notes-in-bx' value={title} placeholder='Title' onChange={(e) => { SetTittle(e.target.value) }} />
                        <textarea className='notes-txt-bx' value={body} placeholder='Take a note...' onChange={(e) => { SetBody(e.target.value) }}></textarea>
                        <Button className='add-btn' onClick={() => { addData() }}>+ADD</Button>
                    </div>
                </div>


                <div className='notes-fetch-Main'>
                    <div className='notes-fetch'>
                        <img src='src/image/notes-blueIcon.svg' />
                        <span style={{ color: "#203562", fontSize: '1.5em' }}>My Notes</span>
                    </div>
                    <h4 style={{ color: '#203562', marginLeft: '1.5em' }}>Recently viewed</h4>
                    <div className='notesCard'>
                        <NotesCard  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesContent