import React from 'react'
import "./ExpolerPage.css"
import Imge1 from "../../../Image/AD_161.webp"
import Imge2 from "../../../Image/boAt-Rockerz-255-Max.webp"
import Imge3 from "../../../Image/Nirvana_Ion.webp"
import Imge4 from "../../../Image/Boat01.webp"
import { Button } from 'reactstrap'

export default function ExpolerPage() {
  let boat =[
    {
      name:Imge1,
    },
    {
      name:Imge2,
    },
    {
      name:Imge3,
    }
    ,
    {
      name:Imge4,
    }
   
  ]
  return (
    <>
    <div className='d-flex gap-2 ' >
      {boat?.map((e, i) => {
        return (
          <div key={i} className='m-2 ' style={{ width: '100%', height: '100%' ,  }}>
            {/* Adjust width and height according to your preference */}
          

            <img className='img-fluid' src={e.name} alt="" style={{ width: '100%', height: '100%' , borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} />
            <div className='div1' style={{height:'100px', borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }}><Button className='btn' style={{marginTop:"40px",marginLeft:"250px", }}>Click</Button></div>
            
          </div>
        );
      })}
    </div>
  </>
  )
}
