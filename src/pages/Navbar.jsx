import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { PiUserSwitch } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
const Navbar = ({currentSection}) => {

  



  return (
   <div>
     <div className=' w-full  flex justify-between lg:px-20 px-7  py-5 items-center'>
        <div>
            <p>PORTFOLIO</p>
        </div>
        <div className='  space-x-9  hidden lg:flex'>
            <a href='#sectionhome' className=' text-sm text-dark-gray'>Home</a>
            <a href='#sectionabout' className=' text-sm text-dark-gray'>About</a>
            <a href='#sectionworks' className=' text-sm text-dark-gray'>Works</a>
            <a href='#sectioncontact' className=' text-sm text-dark-gray'>Contact</a>
        </div>
        <div>
                <a href='https://github.com/jddesign17' className=' flex items-center lg:space-x-3  space-x-2 border border-gray px-2 py-2 rounded-lg text-sm'><FaGithub/>
                <p className='  capitalize'>Github</p></a>
        </div>

        
       
    </div>

<div className='  z-50 md:hidden bg-white border-t border-gray fixed bottom-0  py-[6%] w-full  items-center rounded-t-3xl flex justify-between px-10 overflow-hidden'>
      <a href='#sectionhome' className={`
      ${currentSection === 'sectionhome'?'text-primary text-2xl':'text-dark-gray text-2xl'} `} 
      >
        <HiOutlineHome/>
      </a>
        <a href='#sectionabout' className={`
         ${currentSection === 'sectionabout'?'text-primary text-2xl':'text-dark-gray text-2xl'}` }  >
          <PiUserSwitch/>
        </a>
      <a href='#sectionworks' className={`${currentSection === 'sectionworks'?'text-primary text-2xl':'text-dark-gray text-2xl'} `} ><BsPersonWorkspace/></a>
        <a href='#sectioncontact' className={`${currentSection === 'sectioncontact'?'text-primary text-2xl':'text-dark-gray text-2xl'} `}><LuContact2/></a>
      </div>
   </div>
  )
}

export default Navbar