// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { buttonStyle } from '../TextField/style';
export default class ButtonDemo extends Component {
  render() {
    return (
      <div>    
        <button style={buttonStyle} >Cancle</button> 
        <button style={buttonStyle}  disabled={!(this.props.isEnabled)} onClick={this.props.onClick}> Submit</button>
    </div>
    )
  }
}
