import React from 'react'
import DATA from "../../data/product.json"
// import Cccrd from './Cccrd';
import Cccrd from './Cccrd'

// import CardCom from './Crd';

export default function PropPro1() {
    console.log("DATA",DATA);
  return (
    <div className="d-flex flex-wrap gap-2  p-3">
        {/* <h1>retest</h1> */}
        {
            DATA.map((e)=>{
                // return  <Cccrd data={e}/> 
                //  name={e.title} price={e.price} description={e.description}
                return <Cccrd data={e} price={e.price} disc={e.discountPercentage} after={e.price*e.discountPercentage/100}/>
                 
            })
        }
        
        
    </div>
  )
}
