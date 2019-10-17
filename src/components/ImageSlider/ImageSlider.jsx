import React, { Component } from "react";
import { default as images } from "../../images/index";
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        images.defaultImg,
        images.cloud,
        images.js,
        images.load,
        images.fullStack,
        images.dnsServer
      ],
      currentindex: 0,
      timeduration: 2000
    };
  }
  render() {
    const { banners, currentindex, timeduration } = this.state;
    // eslint-disable-next-line no-unused-vars
    const time = setTimeout(() => {
      this.setState({
        currentindex: banners.length - 1 < currentindex ? 0 : currentindex + 1
      });
    }, timeduration);

    return (
      <div>
        <center>
          <img
            style={this.props.style}
            src={banners[currentindex]}
            alt="description"
          />
        </center>
      </div>
    );
  }
}

export default ImageSlider;
