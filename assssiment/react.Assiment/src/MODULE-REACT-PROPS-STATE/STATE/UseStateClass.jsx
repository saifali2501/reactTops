import { Button } from 'reactstrap'
import React, { Component } from 'react'

export default class UseStateClass extends Component {
    constructor(){
        super()
        this.state={
           count:1000
        }

    }
    incrementHanler(){
this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>UseState</h1>
        <h1>Count{this.state.count}</h1>
        <Button onClick={()=>this.incrementHanler()}>Incerement</Button>
      </div>
    )
  }
}
