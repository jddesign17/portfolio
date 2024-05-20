import React from 'react'
import MainComponent from './pages/MainComponent'
import { Route, Routes } from 'react-router-dom'
import WorkDetails from './pages/WorkDetails'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const App = () => {
  return (

    <div className=' w-full overflow-hidden'>
      <Routes>
      <Route path='/' element={<MainComponent/>}/>
      <Route path='/workdetails/:id' element={<WorkDetails/>}/>
    </Routes>
    </div>
  )
}

export default App