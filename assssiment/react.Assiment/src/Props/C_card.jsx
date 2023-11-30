import { Button } from 'bootstrap'
import React, { Component } from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'

export default class C_crd extends Component {
    constructor (){
        super()
    }
  render() {
    
    return (
      <div>
         <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {this.props?.data?.title || "unablable"}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {this.props?.price} Rs
    </CardSubtitle>
      
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      <p>After_Dicscount = {this.props?.price-this.props.after} Rs</p>
      <p>Discount={this.props?.data.discountPercentage}</p>
 
    </CardSubtitle>
    <CardText>
    {}
    </CardText>
    {/* <Button  className="danger w-100">
      Button
    </Button> */}
  </CardBody>
</Card>
      </div>
    )
  }
}
