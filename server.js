const express = require("express");

const serveStatic = require("serve-static");

const path = require("path");

// create the express app
const app = express();

//creat middleware to handle the serving of the app

app.use("/", serveStatic(path.join(__dirname, "/public")));
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
//create default port to serve the app

const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started on port " + port);
