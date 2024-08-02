import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../UI/Component/Header/Header'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      {/* <Provider > */}
        <Header/>
        <Routes>
            <Route/>
        </Routes>
      {/* </Provider> */}
      </BrowserRouter>
    </div>
  )
}
