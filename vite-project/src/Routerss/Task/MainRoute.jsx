import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserData from './UserData'

import Name from './Name'
import Age from './Age'

export default function MainRoute() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/user' element={<UserData/>}/>
        <Route path='/name/:name' element={<Name/>}/>
        <Route path='/age/:age' element={<Age/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
