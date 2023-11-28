import { Button } from "bootstrap";
import React, { Component } from "react";
import Unmount from "./Unmount";

export default class LifecycleMethod extends Component {
  constructor() {
    super();
    console.log("===============constructor===========");
    this.state={
        count:0,
    }
  }
  componentDidMount(){
    console.log("-----------didmount----------");
  }
  componentDidUpdate(){
    console.log("----------------didUpdate------");
  }
  render() {
    console.log("=======render=======");
    return (
      <div>
        {this.state.count<5?<Unmount/> :null}
        <h1>LifeCycle</h1>
        <h1>Count is {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Click</button>
      </div>
    );
  }
}
