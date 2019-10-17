// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
class TextField extends Component {
  
  render() {
    const { isError, ...rest } = this.props;
    return (
      <div>
      <input {...rest} style={this.props.style} />
       <p>{isError}</p>
      </div>
    )
  }
}
 

export default TextField;