/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { default as images} from '../../images/index';

 class ImageSlider extends Component {
    constructor(props){
        super(props)
        this.state={
            picture: [
                images.default,
                images.cloud,
                images.js,
                images.load,
                images.fullStack,
            ],
            currentindex: 0,
            timeduration: 2000
        }
    }
    render() {
        // eslint-disable-next-line no-unused-vars
        const time = setTimeout(() => {
            const {currentindex} = this.state;     
           this.setState({ 
                currentindex: ((this.state.picture.length-1)<currentindex) ? (0) :(currentindex+1)
        
            });
        },this.state.timeduration);
        const {currentindex} = this.state;

        return (
            <div >
         <center>
         <img style={divStyle} src={this.state.picture[currentindex]} />
         </center> 
            </div>
        )
    }
}

const divStyle = {
    height:'200px',
    width:'400px'
  }
  


export default ImageSlider;
