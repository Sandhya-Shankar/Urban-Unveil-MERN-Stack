import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Hangout from './Hangout'
import Foodmenus from './Foodmenus'
import Reviews from './Reviews'
import Hangoutreviews from './Hangoutreviews'
import BusStop from './BusStop'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element= {<Home />}></Route>
        <Route path = '/Foodmenus' element= {<Foodmenus />}> </Route>
        <Route path='/Hangout' element= {<Hangout />}></Route>
        <Route path= '/BusStop' element={<BusStop />}></Route>
        <Route path="/reviews/:restID" element={<Reviews />}></Route>
        
        <Route path="/hangreviews/:HId" element={<Hangoutreviews />}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  ) 
    

}

export default App
