const express = require("express");

const serveStatic = require("serve-static");

const path = require("path");

const categoriesData = require("./data/categories.js");
const citiesData = require("./data/cities.js");
const itemsData = require("./data/items.js");

// create the express app
const app = express();

//create middleware to handle the serving of the app
app.use("/", serveStatic(path.join(__dirname, "/public")));

//api
// shows all cities available
app.get("/api/cities", function(req, res) {
  res.json(citiesData);
});

//shows all categories for a city
app.get("/api/:city", function(req, res) {
  res.json(categoriesData);
});

// show all items for that category
app.get("/api/:city/:category", function(req, res) {
  console.log(req.params.city);
  const newData = itemsData.filter(item => {
    return item.city == req.params.city && item.category == req.params.category;
  });
  res.json(newData);
});

// show all items for that listing
app.get("/api/:city/:categories/:listing", function(req, res) {
  res.json(itemsData);
});

// shows item selected
app.get("/api/:city/:categories/:listing/:item", function(req, res) {
  res.json(itemsData);
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
//create default port to serve the app

const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started on port " + port);
