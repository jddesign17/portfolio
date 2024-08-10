import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () => {
  AOS.init();
  return (
    <div id='sectionabout' className=' lg:px-20 px-7 py-24 -z-40 w-full overflow-hidden'>

           <div className='  lg:flex  lg:space-x-20 items-center'>
           <div className=' basis-1/2 w-full' data-aos="fade-right">
           <h2 className=' text-3xl  text-dark font-medium  mb-3'>About Me</h2>
            <p className=' text-dark-gray'>Welcome to my portfolio! My name is Surendar, and I specialize in web development, proficient in HTML, CSS, React, React Native, Mongoose, Express, and Tailwind CSS. I recently completed my undergraduate degree in BCA and have since been dedicatedly crafting various projects to hone my skills.

Throughout my journey, I've built over 10 projects, each contributing to my growth and expertise in the field. From responsive web designs to dynamic React applications and mobile experiences with React Native, I've delved deep into the world of modern web technologies.</p>
            </div>
            <div className='basis-1/2 w-full mt-14 lg:mt-0' data-aos="fade-left">
            <h2 className=' text-3xl  text-dark font-medium  text-gradient mb-3 mt-5 lg:mt-0'>Skills</h2>
                    <p className='text-sm uppercase mt-2 text-dark-gray font-medium'>Html</p>
                    <p className=' flex items-center space-x-3'>
                    <input type='range' className=' w-full h-1 accent-primary' min="0" max="100" value="90"/>
                    <p>90%</p>
                    </p>
                    <p className='text-sm uppercase mt-2 text-dark-gray font-medium'>css</p>
                    <p className=' flex items-center space-x-3'>
                    <input type='range' className=' w-full h-1 accent-primary' min="0" max="100" value="85"/>
                    <p>85%</p>
                    </p>
                    <p className='text-sm uppercase mt-2 text-dark-gray font-medium'>Tailwindcss</p>
                    <p className=' flex items-center space-x-3'>
                    <input type='range' className=' w-full h-1 accent-primary' min="0" max="100" value="75"/>
                    <p>75%</p>
                    </p>
                    <p className='text-sm uppercase mt-2 text-dark-gray font-medium'>JavaScript</p>
                    <p className=' flex items-center space-x-3'>
                    <input type='range' className=' w-full h-1 accent-primary' min="0" max="100" value="85"/>
                    <p>85%</p>
                    </p>
                    <p className='text-sm uppercase mt-2 text-dark-gray font-medium'>React</p>
                    <p className=' flex items-center space-x-3'>
                    <input type='range' className=' w-full h-1 accent-primary' min="0" max="100" value="70"/>
                    <p>70%</p>
                    </p>
                
                    
            </div>
           </div>
    </div>
  )
}

export default About