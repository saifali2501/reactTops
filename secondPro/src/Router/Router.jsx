import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../UI/Component/Header/Header'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
