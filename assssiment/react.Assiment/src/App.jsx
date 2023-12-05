import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseEfectMatch from './Hooks/UseEfectMatch'
import UseStatePro from './Hooks/UseStatePro'
import C_crd from './Props/C_card'
import ClassProps from './Props/Class_Props'
import FunProps from './Props/Fun_Props'
import { Nav } from 'react-bootstrap'
import NavScrollExample from './navbar/Nav'
import { UncontrolledCarousel } from 'reactstrap'
import DarkVariantExample from './Page/Page'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     
      {/* <UseEfectMatch/> */}
      
{/* <UseStatePro/> */}
{/* <C_crd/> */}
{/* <ClassProps/> */}
{/* <FunProps/> */}
<NavScrollExample/>
<DarkVariantExample/>

    </div>
    </>
  )
}

export default App
