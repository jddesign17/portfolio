import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { PiUserSwitch } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
const Navbar = () => {

  const [isshow,setisshow] = useState("#")
  function handleactive(route)
  {
        setisshow(route)
  }
  


  return (
   <div>
     <div className=' w-full  flex justify-between lg:px-20 px-7  py-5 items-center'>
        <div>
            <p>PORTFOLIO</p>
        </div>
        <div className='  space-x-9  hidden lg:flex'>
            <a href='#' className=' text-sm text-dark-gray'>Home</a>
            <a href='#about' className=' text-sm text-dark-gray'>About</a>
            <a href='#works' className=' text-sm text-dark-gray'>Works</a>
            <a href='#contact' className=' text-sm text-dark-gray'>Contact</a>
        </div>
        <div>
                <a href='https://github.com/jddesign17' className=' flex items-center lg:space-x-3  space-x-2 border border-gray px-2 py-2 rounded-lg text-sm'><FaGithub/>
                <p className='  capitalize'>Github</p></a>
        </div>

        
       
    </div>

<div className='  z-50 md:hidden bg-white border-t border-gray fixed bottom-0  py-[6%] w-full  items-center rounded-t-3xl flex justify-between px-10 overflow-hidden'>
      <a href='#' className={`${isshow==='#'?' text-2xl  text-primary':' text-2xl text-dark-gray'}`} onClick={()=>handleactive('#')}><HiOutlineHome/></a>
        <a href='#about' className={`${isshow==='#about'?' text-3xl  text-primary':' text-3xl text-dark-gray'}`} onClick={()=>handleactive('#about')}><PiUserSwitch/></a>
      <a href='#works' className={`${isshow==='#works'?' text-2xl  text-primary':' text-2xl text-dark-gray'}`} onClick={()=>handleactive('#works')}><BsPersonWorkspace/></a>
        <a href='#contact' className={`${isshow==='#contact'?' text-2xl  text-primary':' text-2xl text-dark-gray'}`} onClick={()=>handleactive('#contact')}><LuContact2/></a>
      </div>
   </div>
  )
}

export default Navbar