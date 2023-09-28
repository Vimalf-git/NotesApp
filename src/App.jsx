import { useState } from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import NotesContent from './Components/NotesContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotesContext from './Components/Context/NotesContext'

function App() {

  return (
    <>
      <div className='mainSetUp'>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='*' element={
              <NotesContext>
                <NotesContent />
              </NotesContext>} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
