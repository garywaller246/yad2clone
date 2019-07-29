import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Gary",
      cityDropdown: false,
      selectedCity: "Jerusalem",
      citiesData: []
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get(`/api/cities`)
      .then(function(response) {
        const { match, history } = self.props;
        let city = response.data.filter(item => {
          return item.slug == match.params.city;
        });
        self.setState(
          {
            citiesData: response.data,
            selectedCity: city[0].title
          },
          () => {
            // console.log(self.state);
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    });
  };

  selectCity = city => {
    this.setState(
      {
        selectedCity: city
      },
      () => {
        let city = this.state.citiesData.filter(item => {
          return item.title == this.state.selectedCity;
        });
        const { match, history } = this.props;
        history.push(`/${city[0].slug}`);
      }
    );
  };

  loopCities = () => {
    const self = this;
    return this.state.citiesData.map((item, i) => {
      return (
        <li key={i} onClick={this.selectCity.bind(null, item.title)}>
          {item.title}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <div className={"left-menu"}>
            <div className={"logo"}>
              <i className="fas fa-hands-helping" /> Yad Shtaim
            </div>
            <div className={"city-dropdown"} onClick={this.clickedCityDropdown}>
              {this.state.selectedCity}
              <i
                className={`fas fa-chevron-down ${
                  this.state.cityDropdown ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              />
              <div
                className={`scroll-area ${
                  this.state.cityDropdown ? "active" : ""
                }`}
              >
                <ul>{this.loopCities()}</ul>
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
