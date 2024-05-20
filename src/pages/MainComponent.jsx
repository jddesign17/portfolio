import React from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contact from './Contact'
const MainComponent = () => {
  return (
    <div>
        <div className='bg-white-gradient '>
      
     
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
    </div>
  )
}

export default MainComponent