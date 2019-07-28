import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Gary",
      cityDropdown: false,
      selectedCity: "jlm",
      citiesData: []
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(`/api/cities`)
      .then(function(response) {
        self.setState(
          {
            citiesData: response.data
          },
          () => {
            console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div className="container">
        <header>
          <div className={"left-menu"}>
            <div className={"logo"}>
              <i className="fas fa-hands-helping" /> Yad Shtaim
            </div>
            <div className={"city"}>
              Jerusalem
              <i className={`fas fa-chevron-down`} />
              <div className={`dropdown`}>
                <ul>
                  <li>Tel Aviv</li>
                  <li>Haifa</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"right-menu"}>
            <div className={"user-img"}>image</div>
            <div className={"user-dropdown"}>
              My account
              <i className={`fas fa-chevron-down`} />
            </div>
            <div className={"post-btn"}>post to classifieds</div>
          </div>
        </header>
      </div>
    );
  }
}
