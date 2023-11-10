import React from 'react'
import DATA from '../../data/product.json'
import C_crd from './C_crd'

export default function ClassPrp() {
  return (
    <div>
       <div className="d-flex flex-wrap gap-2  p-3">
        {/* <h1>retest</h1> */}
        {
            DATA.map((e)=>{                // return  <C_crd data={e} name={e.title} price={e.price} description={e.description}/> 
                 
                // return <C_crd data={e} price={e.price} disc={e.discountPercentage} after={e.price*e.discountPercentage/100}/>

                return <C_crd data={e} name={e.title} price={e.price} disc={e.discountPercentage} after={e.price*e.discountPercentage/100}/>
                 
            })
        }
        
        
    </div>
    </div>
  )
}
