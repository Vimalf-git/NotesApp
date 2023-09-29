import React, { useContext, useState } from 'react'
import NotesCard from './NotesCard'
import { Button } from 'react-bootstrap'
import { NotesDataContext } from './NotesContext'

function NotesContent() {
    const { data, setData,title,SetTittle,body,SetBody,
        addOrEdit ,setAddOrEdit,editIndex
        ,editIcon,deleteIcon,notesBlueIcon} =useContext(NotesDataContext);

    const addData = () => {
        if(addOrEdit==='add'){
            const newDataVal = [...data];
        if (title === '' || body === '') {
            alert("please fill the note")
        } else {
            newDataVal.push({
                title,
                body,
                editIcon:editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            })
            setData(newDataVal);
            SetTittle('');
            SetBody('');
        }
        }else{
            const newEditVal=[...data];
            newEditVal.splice(editIndex,1,{
                title,
                body,
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            })
            setData(newEditVal);
            SetTittle('');
            SetBody('');
            setAddOrEdit('add')
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
                        <Button className='add-btn' onClick={() => { addData() }}>{addOrEdit=='add'?"+ADD":"Update"}</Button>
                    </div>
                </div>


                <div className='notes-fetch-Main'>
                    <div className='notes-fetch'>
                        <img src={notesBlueIcon}/>
                        <span style={{ color: "#203562", fontSize: '1.5em' }}>My Notes</span>
                    </div>
                    <h4 style={{ color: '#677898', marginLeft: '1.5em' }}>Recently viewed</h4>
                    <div className='notesCard'>
                        <NotesCard isProb={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesContent