import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function CardCom({product}) {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img
    style={{height: "287px"}}
    alt="Sample"
    src={product?.thumbnail}
  />
  <CardBody>
    <CardTitle tag="h5">
      {product.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     {product.brand}
    </CardSubtitle>
    <CardText>
     {product.price}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
    </div>
  )
}
