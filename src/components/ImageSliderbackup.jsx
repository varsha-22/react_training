import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import SimpleImageSlider from 'react-simple-image-slider';


 class ImageSlider extends Component {
   
  render() {
    // eslint-disable-next-line no-unused-vars
    const images  = [
      { url: "images/cloud.jpg" },
      { url: "images/dns-server-png" },
      { url: "images/full-stack.jpg" },
      { url: "images/js.jpg" },
      { url: "images/load-balancer.png" },
      { url: "images/default.png" },
  ];
    return (
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
    )
  }
}
export default ImageSlider;