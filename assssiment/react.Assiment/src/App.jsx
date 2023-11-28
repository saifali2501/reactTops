import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseEfectMatch from './Hooks/UseEfectMatch'
import UseStatePro from './Hooks/UseStatePro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     
      {/* <UseEfectMatch/> */}
      
<UseStatePro/>
    </div>
    </>
  )
}

export default App
