import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className='main'>
            <h1 className='h1'>Anusree.A</h1>
            <ul className='ul'>
              <a href="/"><li className='hm'>Home</li></a> 
              <a href="/about"><li className='hm'>About</li></a>
              <a href="/skil"><li className='hm'>Skill</li></a>
              <a href="/work"><li className='hm'>Work</li></a>
              <a href="/contact"><li className='hm'>Contact</li></a>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar