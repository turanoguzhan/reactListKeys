import React, { Component } from "react";

class Validation extends Component {
  state = {
    minLimitLength: 5,
    lengthMessage: "",
  };

  render() {
    let msg = "";

    if (this.props.txtLength > this.state.minLimitLength) {
      msg = "Text is long enough.";
    } else {
      msg = "Text is too short.";
    }

    return (
      <div>
        <label>The length of your text is {this.props.txtLength}</label>
        <p>{msg}</p>
      </div>
    );
  }
}

export default Validation;
