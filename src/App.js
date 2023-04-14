import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import Home from './components/home/Home'
import About from './components/About/About'
import Skil from './components/skill/Skil'
import Work from './components/Work/Work'


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skil" element={<Skil/>}/>
        <Route path="/work" element={<Work/>}/>
        
      </Routes>
    </div>
  )
}

export default App