import React, { Component } from "react";
import "./App.css";
import Char from "./Char";
import Validation from "./Validation";

class App extends Component {
  state = {
    textLength: 0,
    txtArray: [],
    txtValue: ""
  };

  textOperations = (event) => {

    let length = 0;
    const valueTxt = event.target.value;

    length = valueTxt.length;

    const valueArr = valueTxt.split('');

    this.setState({
      textLength: length,
      txtArray: valueArr,
      txtValue:valueTxt
    });
  }

  deleteOperationHandle = (index) => {

    const textArr = this.state.txtArray;

    textArr[index] = "";
    const val = textArr.join('');

    const length = val.length;
    const valueArr = val.split('');

    this.setState({
      textLength: length,
      txtArray: valueArr,
      txtValue:val
    });
  }

  render() {
    let charList = this.state.txtArray.map((ch, index) => {
          return <Char letter={ch} key={index} click={this.deleteOperationHandle.bind(this,index)} />
    });

    return (
      <div className="App">
        <div>
          <label>
            Please input a text :
            <input
              type="text"
              onChange={(event) => this.textOperations(event)}
              value={this.state.txtValue}
            />
          </label>
        </div>
        <Validation txtLength={this.state.textLength} />
        {charList}
      </div>
    );
  }
}

export default App;
