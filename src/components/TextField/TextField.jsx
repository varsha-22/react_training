import React, { Component } from 'react';
class TextField extends Component {
   constructor(props){
      super(props);
      this.state = {
         'disable' :  true,
         'username' : '',
         'age' : null,
         'errmsg' : ''
      };
   }

   textChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if(nam === 'age'){
         if(val !== "" && !Number(val)){
            err = <strong style ={{color: 'red'}}> Your age must be a number</strong>
         }
         if(val !== "" && val < 1 ){
            err = <strong style ={{color: 'red'}}> Age can not be below the 1</strong>
         }
         if(val !== "" && val > 100 ){
            err = <strong style ={{color: 'red'}}> Age can not be above the 100</strong>
         }
      }
      
      this.setState({errmsg: err});
      this.setState({[nam]: val});
   }
//style={{backgroundColor: 'skyblue'}}
  render() {

    const formStyle = {
      padding: "10px",
      fontFamily: "Arial"
    };

    const inputstyle = {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      boxSizing: "border-box",
      borderRadius: "4px"
    };

    const mystyle = {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      color: "Black",
      fontFamily: "Western"

    };
    return (
      <div>
        <form style={formStyle}>
        <h1 style={mystyle}>First React Task</h1>
        <h2> This is the Disable Input</h2>
        <input type='text' name='disable'  onChange= {this.textChangeHandler}
        placeholder='Disabled input' disabled={this.state.disable}
        style={inputstyle}/>
        <h2> A Valid Input</h2>
        <input type='text' name='username' onChange= {this.textChangeHandler} style={inputstyle}
        placeholder='Name'/>
        <h2> An Input with Error</h2>
        <input type='text' name='age' onChange= {this.textChangeHandler} placeholder='Age' 
        style={inputstyle}/>
        <p>{this.state.errmsg}</p>
        </form>
      </div>
    )
  }
}

export default TextField;