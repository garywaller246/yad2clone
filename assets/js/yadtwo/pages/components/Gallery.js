import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImages: "",
      currentImage: "",
      currentIndex: 0
    };
  }

  componentWillMount() {
    const allImages = [
      "https://www.extremetech.com/wp-content/uploads/2016/10/2013-Buick-Verano-009-640x427.jpg",
      "https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg",
      "https://server86.texasdirectauto.com/1N4AA6AP1HC456279/001_0001.jpg",
      "https://cdn.hswstatic.com/gif/10-used-car-online-tips-orig.jpg",
      "https://www.wired.com/images_blogs/autopia/2009/10/usedcar.jpg",
      "https://amp.businessinsider.com/images/5138ca2669bedd141300000e-750-548.jpg"
    ];
    this.setState({
      allImages,
      currentImage: allImages[this.state.currentIndex]
    });
  }

  allImagesLoop = () => {
    return this.state.allImages.map((item, i) => {
      return (
        <div
          key={i}
          onClick={this.clickedThumb.bind(null, i)}
          className="thumb-img"
          style={{
            backgroundImage: `url('${item}')`
          }}
        />
      );
    });
  };

  nextBtn = () => {
    if (this.state.currentIndex != this.state.allImages.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  };

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };

  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              {"<"}
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              {">"}
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImages[this.state.currentIndex]
                }')`
              }}
            />
          </div>
          <div className="thumbnails">{this.allImagesLoop()}</div>
        </div>
      </div>
    );
  }
}
