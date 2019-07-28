import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Gary",
      categoriesData: ""
    };
  }

  componentWillMount() {
    const self = this;
    axios
      .get("/api/categories")
      .then(function(response) {
        self.setState(
          {
            categoriesData: response.data
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

  loopCategories = () => {
    // is statement for data
    if (this.state.categoriesData != "") {
      //return back the loop of category
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () => {
          return category.listings.map((listing, index) => {
            return (
              <a
                href={`${category.title}/${listing.slug}`}
                className="link"
                key={index}
              >
                {listing.name}
              </a>
            );
          });
        };
        return (
          <div className="categories" key={i}>
            <div className="title">{category.title}</div>
            <div
              className={`group-links ${
                category.title == "jobs" ||
                category.title == "personals" ||
                category.title == "housing"
                  ? "single-col"
                  : ""
              }`}
            >
              {loopListings()}
            </div>
          </div>
        );
      });
    } else {
      return "LOADING";
    }
  };

  loopTags = () => {
    let testtags = ["a", "b", "c", "d", "e", "f", "g"];
    return testtags.map((item, i) => (
      <div key={i} className="tag">
        Apple Macbook
      </div>
    ));
  };

  render() {
    return (
      <div className="home">
        <div className="container">
          <h2>
            Connecting the <br />
            Mission-Driven Nation
          </h2>
          <section className={"links"}>{this.loopCategories()}</section>
          <section className={"trending"}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" />
              Trending Now
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
