import React from 'react'
import image from "../assets/photo.png"
import resume from "../assets/resume.jpg"
import AOS from 'aos';
import { FiDownloadCloud } from "react-icons/fi";
import 'aos/dist/aos.css'; 

const Home = () => {
    AOS.init();
  return (
   <div id='sectionhome'>
    
    <div className=' flex flex-col items-center lg:pt-20 pt-10 w-full'>
     
     <div className=' flex flex-col items-center'>
         <p className=' text-4xl text-gradient    font-medium capitalize '>Surendar </p>
         <p className=' text-dark font-normal  w-full text-center  text-lg  '>Web Developer</p>
         <p className=' text-dark-gray w-3/4 text-center text-md mt-5'>I'm a passionate React web developer dedicated to creating innovative, responsive websites.. </p>
     </div>
     <div>
         <img src={image} className=' w-72 bg-blue-gradient rounded-full mt-5' data-aos="zoom-in" />
     </div>
     <a href={resume} download="resume.jpg"  className=' flex items-center space-x-2 bg-blue-gradient px-10 py-3 text-white rounded-2xl mt-10'>
        <FiDownloadCloud size={20}/>
         <p>Download CV</p>
     </a>

 </div>
   </div>
  )
}

export default Home