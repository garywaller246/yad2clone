import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImages: [
        "https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg",
        "https://www.extremetech.com/wp-content/uploads/2016/10/2013-Buick-Verano-009-640x427.jpg",
        "https://server86.texasdirectauto.com/1N4AA6AP1HC456279/001_0001.jpg",
        "https://cdn.hswstatic.com/gif/10-used-car-online-tips-orig.jpg",
        "https://www.wired.com/images_blogs/autopia/2009/10/usedcar.jpg",
        "https://amp.businessinsider.com/images/5138ca2669bedd141300000e-750-548.jpg"
      ]
    };
  }

  allImagesLoop = () => {
    return this.state.allImages.map((item, i) => {
      return (
        <div
          key={i}
          className="thumb-img"
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow">{"<"}</div>
            <div className="arrows right-arrow">{">"}</div>
            <div
              className="image-1"
              style={{
                backgroundImage:
                  "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
              }}
            />
          </div>
          <div className="thumbnails">{this.allImagesLoop()}</div>
        </div>
      </div>
    );
  }
}
