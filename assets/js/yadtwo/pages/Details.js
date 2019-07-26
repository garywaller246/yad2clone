import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery.js";

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
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">posted: March 30th</div>
                <h3 className="title">Black 2016 BMW</h3>
                <h4 className="price">$77,000</h4>
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
                  <label>Description</label>
                  <p>
                    Cars came into global use during the 20th century, and
                    developed economies depend on them. The year 1886 is
                    regarded as the birth year of the modern car when German
                    inventor Karl Benz patented his Benz Patent-Motorwagen. Cars
                    became widely available in the early 20th century. One of
                    the first cars accessible to the masses was the 1908 Model
                    T, an American car manufactured by the Ford Motor Company.
                    Cars were rapidly adopted in the US, where they replaced
                    animal-drawn carriages and carts, but took much longer to be
                    accepted in Western Europe and other parts of the world.
                  </p>
                  <p>
                    Cars came into global use during the 20th century, and
                    developed economies depend on them. The year 1886 is
                    regarded as the birth year of the modern car when German
                    inventor Karl Benz patented his Benz Patent-Motorwagen. Cars
                    became widely available in the early 20th century. One of
                    the first cars accessible to the masses was the 1908 Model
                    T, an American car manufactured by the Ford Motor Company.
                    Cars were rapidly adopted in the US, where they replaced
                    animal-drawn carriages and carts, but took much longer to be
                    accepted in Western Europe and other parts of the world.
                  </p>
                  <p>
                    Cars came into global use during the 20th century, and
                    developed economies depend on them. The year 1886 is
                    regarded as the birth year of the modern car when German
                    inventor Karl Benz patented his Benz Patent-Motorwagen. Cars
                    became widely available in the early 20th century. One of
                    the first cars accessible to the masses was the 1908 Model
                    T, an American car manufactured by the Ford Motor Company.
                    Cars were rapidly adopted in the US, where they replaced
                    animal-drawn carriages and carts, but took much longer to be
                    accepted in Western Europe and other parts of the world.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
