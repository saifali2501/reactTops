import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <>
      ClassProps
      <h1>Hello, {this.props.data.name}</h1>
      <h2>{this.props.data.greeting}</h2>
      </>
    )
  }
}
