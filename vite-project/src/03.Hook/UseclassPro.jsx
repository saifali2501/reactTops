import React, { Component } from "react";
import "./Dtn.css";
import { Button } from "bootstrap";

export default class UseclassPro extends Component {
  constructor() {
    super();
    this.colorArr = ["green", "blue", "white", "red"];
    this.state = {
      ColorIndex: 0,
    };
  }
  changeColorHandler() {
    this.setState({ ColorIndex: this?.state?.ColorIndex + 1 });
  }
  render() {
    return (
      <>
        <div className="main">
          {/* <h1>{this.state.ColorIndex}</h1> */}
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              backgroundColor: this?.colorArr[this?.state?.ColorIndex],
              color: "black",
            }}
          >
            <h1>hello World</h1>
          </div>
          <button onClick={() => this.changeColorHandler()}>
            Change color
          </button>
          
        </div>
      </>
    );
  }
}
