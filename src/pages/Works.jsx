import React from 'react'
import {data} from "../constants"
import { useNavigate } from 'react-router-dom'
const Works = () => {

    const navigate = useNavigate()

    function handlenavigate(id)
    {
        console.log(id)
            navigate(`/workdetails/${id}`)
    }

  return (
   <div id='sectionworks' className=' lg:px-20 px-7 py-10 w-full overflow-hidden' >
    <div className=' flex flex-col items-center  pb-10' data-aos="fade-up"
     data-aos-duration="500">
    <h2 className=' text-3xl  text-dark font-medium text-center mb-3'>Works</h2>
    <p className=' lg:w-1/2 text-center text-dark-gray'>My recent projects span both frontend and backend development, showcasing my ability to create cohesive and efficient web solutions..</p>
    </div>
     <div className=' grid  md:grid-cols-2 lg:grid-cols-3 lg:gap-20 md:gap-10 gap-5' >
        {
            data.map((item)=>(
                <div className=' border-gray border p-5 rounded-3xl cursor-pointer  hover:scale-90 transition-all' key={item.id} onClick={()=>handlenavigate(item.id)} data-aos={item.animation}>
                    <img src={item.img} className=' w-full rounded-3xl'/>
                    <p className=' mt-3 text-md font-semibold capitalize'>{item.name}</p>
                    <p className=' capitalize text-dark-gray font-normal '>category : {item.Category}</p>
                </div>
            ))
        }
    </div>
   </div>
  )
}

export default Works