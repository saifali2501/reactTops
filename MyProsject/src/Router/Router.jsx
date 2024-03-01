import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../ui/Component/Header/Header'
import Home from '../ui/Page/Home'
import Sungless from '../ui/Page/Sungless'
import Men from '../ui/Page/Men'
import Women from '../ui/Page/Women'
import Unisex from '../ui/Page/Unisex'
// import PrimCombos from '../ui/Page/PrimCombos'
import Footer from '../ui/Component/Footer/Footer'
import Body from '../ui/Page/Home/Body'
import ExpolerPage from '../ui/Page/ExpolerPage/ExpolerPage'
import LogingData from '../ui/Page/LogingData'
// import { Home } from 'react-feather'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Body/>
      <ExpolerPage/>
     
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sungless' element={<Sungless/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='/unisex' element={<Unisex/>}/>
        {/* <Route path='/prim' element={<PrimCombos/>}/> */}
        <Route path='/logindata' element={<LogingData/>}/>

        

        {/* <Route path='/Women' element={}/> */}


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
