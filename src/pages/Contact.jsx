import React from 'react'
import whatspp from "../assets/whatsapp.png"
import gmail from "../assets/gmail.png"
const Contact = () => {

    const phonenumber = '+918489921798'
    const message = "Hi Surendar, hope you're doing well! I'm interested in your web development services. Can we chat?"
    const link = `https://wa.me/${phonenumber}?text=${encodeURIComponent(message)}`

  return (
    <div className=' pb-20 flex flex-col space-y-10 items-center w-full py-20 overflow-hidden' id='sectioncontact' data-aos="flip-left" >
        <div >
            <p className=' capitalize text-3xl text-dark font-ligh'>get In to touch !</p>
        </div>
        <div className=' flex lg:flex-row lg:space-x-10 lg:w-1/2  flex-col  space-y-5  lg:space-y-0 px-7 pb-20'>
            <a href={link} className='  flex justify-center items-center space-x-2  text-dark text-md capitalize border border-gray px-5 rounded-2xl  py-3' target='blank'>
                <img src={whatspp} className=' lg:w-[10%] md:w-[5%] sm:w-[8%] w-[10%]'/>
                <p>whatsapp</p>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jddesign234@gmail.com" className='  flex items-center py-3 text-dark text-md space-x-2 capitalize border justify-center border-gray px-5 rounded-2xl' target='blank'>
                <img src={gmail} className=' lg:w-[10%] md:w-[5%] sm:w-[8%] w-[10%]'/>
               <p>gmail</p>
            </a>

        </div>
    </div>
  )
}

export default Contact