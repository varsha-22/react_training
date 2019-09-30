import React, { Component } from 'react';
// import Slider from '../Slider/Slider';
import SimpleImageSlider from 'react-simple-image-slider';
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
   
  render() {
     
   const images  = [
      { url: "images/cloud.jpg" },
      { url: "images/dns-server-png" },
      { url: "images/full-stack.jpg" },
      { url: "images/js.jpg" },
      { url: "images/load-balancer.png" },
      { url: "images/default.png" },
  ];
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
      <div>
          <SimpleImageSlider
            style={{ margin: "0 auto", marginTop: "50px" }}
            width={896}
            height={504}
            images={images}
            showBullets={this.state.showBullets}
            showNavs={this.state.showNavs}
            useGPURender={this.state.useGPURender}
            navStyle={this.state.navStyle}
            slideDuration={this.state.slideDuration}
            onClickNav={this.onClickNav}
            onClickBullets={this.onClickBullets}
            onStartSlide={this.onStartSlide}
            onCompleteSlide={this.onCompleteSlide}
      />
      </div>
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