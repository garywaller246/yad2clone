import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Gary"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <header>
        <div className={"left-menu"}>
          <div className={"logo"}>Yad2</div>
          <div className={"city"}>
            Jerusalem
            <i className={`fas fa-chevron-down`} />
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
    );
  }
}