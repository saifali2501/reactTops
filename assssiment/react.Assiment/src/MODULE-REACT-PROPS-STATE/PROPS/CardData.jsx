import React from 'react'

import data from "../../../Data/product.json"

import CardProps from './CardProps';


export default function CardData() {
    console.log("DATA",data);
  return (
    <div className="d-flex flex-wrap gap-2  p-3">
        {
        data.map((e)=>{
            

                return <CardProps data={e} price={e.price} disc={e.discountPercentage} after={e.price*e.discountPercentage/100}/>
                 
            })
        }
        
        
    </div>
  )
}
