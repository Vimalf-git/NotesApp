import React, { useState } from 'react'
import deleteIcon from '../image/delete.svg'
import editIcon from '../image/edit.svg'
export const NotesDataContext = React.createContext();
function NotesContext({ children }) {
    const [data, setData] = useState(
        [
            {
                title: 'Feed12backs',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
            {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
        ])

    const [title, SetTittle] = useState('')
    const [body, SetBody] = useState('')
    const [addOrEdit, setAddOrEdit] = useState('add');
    const [editIndex,setEditindex]=useState();
    return (
        <NotesDataContext.Provider value=
        {{ data, setData, title, SetTittle, body, 
        SetBody, addOrEdit ,setAddOrEdit,editIndex,setEditindex}}>
            {children}
        </NotesDataContext.Provider>
    )
}

export default NotesContext