import React, { Component } from "react";
import Plaintext from "./components/Plaintext";
import Binarytext from "./components/Binarytext";
import Paper from "@material-ui/core/Paper";

class Main extends Component {
  constructor(props) {
    super(props);
    // this.child = React.createRef();
    this.state = {
      plainTxt: "",
      binaryTxt: ""
    };
  }

  // logic backward conversion from binary to txt
  handleBinaryText = e => {

    const binaryString = e.target.value.split(' ');
    var stringOutput = '';
    if(binaryString.length !== 1) {
      for (let i in binaryString) {
      stringOutput += String.fromCharCode(parseInt(binaryString[i], 2));
    }
  }
    this.setState({ binaryTxt: e.target.value, plainTxt: stringOutput });
  };
  // logic for binary conversion from plaintext
  handlePlainText = (e) => {
    var txt = e.target.value;
    var binTxt =  txt.split('').map((char)=> {
        return char.charCodeAt(0).toString(2);
    }).join(' ');

    this.setState({ binaryTxt: binTxt, plainTxt: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <center>
          <h1>Binary Converter</h1>
        </center>
        <Paper elevation={10} className="child-container">
          <Plaintext
            value={this.state.plainTxt}
            onChange={this.handlePlainText}
          />
          <h1>&#8652;</h1>
          <Binarytext
            value={this.state.binaryTxt}
            onChange={this.handleBinaryText}
          />
        </Paper>
      </div>
    );
  }
}

export default Main;
