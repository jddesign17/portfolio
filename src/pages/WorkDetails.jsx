import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../constants'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkDetails = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 900,
        cssEase: "linear"
      };
    const [item,setItem ] = useState([])
    const [languages,setlanguages] = useState([])
    const [images,setimages] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const fetchdata = ()=>{
        
            const selected = data.find(item =>item.id===id)
            setItem(selected)
            if(selected)
                {
                    setlanguages(selected.langauges)
                    setimages(selected.images)
                }
        }
        fetchdata()
    },[])

    console.log(item)
  return (
    <div className='bg-white-gradient lg:px-20 lg:py-10 px-7 py-10 relative w-full overflow-hidden' >
    <div >
        <p className=' lg:text-6xl   text-4xl w-full leading-snug font-semibold text-gradient' >{item.name}</p>
        <p  className=' flex  md:space-x-5  uppercase mt-5 flex-wrap'>{languages.map((item)=>(
            <p  className='w-fit  border border-gray  px-5 py-2 rounded-2xl lg:mt-0 mt-3 lg:mr-0 mr-2'>{item.name}</p>  
        ))}</p>
        <p className=' leading-8 text-lg text-dark-gray lg:w-3/4 mt-5  capitalize'>{item.description}</p>
        </div>


       <div className="slider-container mt-10">
       
       </div>

       <div className="slider-container">
     
      <Slider {...settings}>
        {
                images.map((item)=>(
                    <img src={item}  className=' w-[100%]'/>
                ))
        }
    </Slider>
    
    </div>


      <div className=' w-full flex flex-col space-y-6 mt-7'>
     {
        item.href && (
          <a  href={item.href} className=' bg-blue-gradient py-4 text-white hover:border text-center hover:border-gray hover:bg-white hover:scale-95  transition-all'>
          Live Demo
     </a>
        )
     }
       <a  href={item.github}  className='bg-blue-gradient py-4 text-white hover:border text-center hover:border-gray hover:bg-white hover:scale-95  transition-all'>
            Github
       </a>
      </div>



     

    </div>
  )
}

export default WorkDetails