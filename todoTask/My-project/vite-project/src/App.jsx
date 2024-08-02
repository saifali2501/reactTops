import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouter from './Task/MainRounter'
import MyTask from './Task/Mytask'
// import Mytask from './Task/Mytask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MainRouter/> */}
    <MyTask/>
    </>
  )
}

export default App
