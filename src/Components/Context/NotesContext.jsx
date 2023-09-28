import React, { useState } from 'react'
export const NotesDataContext=React.createContext();
function NotesContext({children}) {
    const [data, setData] = useState(
        [
            {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: 'src/image/edit.svg',
                deleteIcon: 'src/image/delete.svg',
                date: "5 days ago"
            },
            {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: 'src/image/edit.svg',
                deleteIcon: 'src/image/delete.svg',
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: 'src/image/edit.svg',
                deleteIcon: 'src/image/delete.svg',
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: 'src/image/edit.svg',
                deleteIcon: 'src/image/delete.svg',
                date: "5 days ago"
            },
        ])
  return (
    <NotesDataContext.Provider value={{data,setData}}>
        {children}
    </NotesDataContext.Provider>
  )
}

export default NotesContext