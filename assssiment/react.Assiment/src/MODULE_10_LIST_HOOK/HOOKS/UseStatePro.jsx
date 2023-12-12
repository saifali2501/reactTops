

import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class UseStatePro extends Component {
  constructor() {
    super();
    this.colorArr = ["green", "blue", "white", "red"];
    this.state = {
      ColorIndex: 0,
    };
  }

  changeColorHandler() {
    const newColorIndex = this.state.ColorIndex + 1;

    if (newColorIndex < this.colorArr.length) {
      this.setState({ ColorIndex: newColorIndex });
      
    } else {
      alert("Ruko jara sabar karo color itna hi hai");
    }
  }

  render() {
    return (
      <>
        <div className="main text-center">
          <div
            style={{
              padding: "10px",
              textAlign: "center",
              backgroundColor: this.colorArr[this.state.ColorIndex],
              color: "black",
            }}
          >
            <h1>hello World</h1>
          </div>
          <Button className="w-25 " onClick={() => this.changeColorHandler()}>
            Change color
          </Button>
        </div>
      </>
    );
  }
}
