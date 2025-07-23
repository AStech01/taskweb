import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskList from './pages/TaskList'
import TaskFormPage from './pages/TaskFormPage'

function App() {
  return (
    <>
      <Router>
        <div className="container mx-auto p-4">

          <Routes>
            <Route path='/' element={<TaskList />}></Route>
            <Route path='/add' element={<TaskFormPage />}></Route>
            <Route path='/edit/:id' element={<TaskFormPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
