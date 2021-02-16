import React, { Component } from "react";
import "./Char.css";

class Char extends Component {
  render() {

    return (
      <div className="Char">
        <p onClick={this.props.click}>{this.props.letter}</p>
      </div>
    );
  }
}
export default Char;
