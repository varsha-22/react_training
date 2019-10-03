// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'


const buttonStyle={
    width:"150px",
    height:"30px",
    float:"right",
    marginRight:'16px'
  
  }

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
