import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import Navbar from './Navbar'
const MainComponent = () => {


    const [currentSection,setCureentSection] = useState('')

     const handleScroll = ()=>{
      const sectionoffset = document.querySelectorAll('div[id^="section"')
      let newSection = ''
      sectionoffset.forEach((section)=>{
          const rect = section.getBoundingClientRect()
          if(rect.top <= 0 && rect.bottom >= 0)
          {
            newSection = section.id
          }

          if(currentSection != newSection)
          {
            setCureentSection(newSection)
          }
      })
     }

     useEffect(()=>{
      window.addEventListener('scroll',handleScroll)

      return()=>{
        window.removeEventListener('scroll',handleScroll)
      }
     },[])
    



  return (
    <div>
        <div className='bg-white-gradient '>
      
      <Navbar currentSection={currentSection}/>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
    </div>
  )
}

export default MainComponent