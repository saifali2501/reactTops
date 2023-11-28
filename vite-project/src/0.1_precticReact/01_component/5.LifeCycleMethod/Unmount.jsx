import React, { Component } from 'react'

export default class Unmount extends Component {
  
    componentWillUnmount(){
        alert("stop")
    }
  render() {
    return (
      <div>
        <h1 style={{color:"red"}}>Unmount</h1>
               </div>
    )
  }
}

