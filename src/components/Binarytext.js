import React, { Component } from "react";
// import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

class Binarytext extends Component {
  render() {
    return (
      <div className="right">
        <center>
          <h2>Binary</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter 1100010 by space.."
            // value={this.props.value}
            // onChange={this.props.onChange}
            {...this.props}
          />
        </center>
      </div>
    );
  }
}

export default Binarytext;
