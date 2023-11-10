import React, { Component } from 'react'

export default class UseStateClass extends Component {
  constructor(){ 
    super();
    this.state ={
      count:1000,
    }
  }
incrementHandler(){
  this.setState({count:this.state.count +1})
}
  render() {
    return (
      <div>
        <h1> UseStateClass</h1>
        <h1>count is {this.state.count}</h1>
        <button onClick={() => this.incrementHandler()}>INC</button>
      </div>
      
    )

  }
}
