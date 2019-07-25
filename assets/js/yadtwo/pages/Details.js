import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="#" className="prev">
                  Prev
                </a>
                <a href="#" className="next">
                  Next
                </a>
              </div>
              <nav className="sub-links">
                <a href="#">More ad by user</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>
            <section className="content-area">
              <div className="media-column">
                <div className="gallery">
                  <div className="slider">
                    <div className="main-image">
                      <div className="arrows left-arrow">{"<"}</div>
                      <div className="arrows right-arrow">{">"}</div>
                      <div
                        className="image-1"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      />
                    </div>

                    <div className="thumbnails">
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                      <div
                        className="thumb-img"
                        style={{
                          "background-image":
                            "url(https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg)"
                        }}
                      >
                        image
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details-column">
                <div className="date">posted: March 30th</div>
                <h3>Black 2016 BMW</h3>
                <h4 className="price">Black 2016 BMW</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Mileage</label>
                    <h5>12345</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual</h5>
                  </div>
                  <div className="info">
                    <label>Vin</label>
                    <h5>hlnsldvn</h5>
                  </div>
                </div>
                <div className="description">
                  <p> this is the descriptions</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
