// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a big glup"
  }
];

// Routes  render comes from express
// when we pass in an object like lunches[0] express opens up that object
app.get("/weekday", function(req, res) {
  res.render("index", lunches[0]); // look for index.handlebars inside views directory
});

app.get("/weekend", function(req, res) {
  res.render("index", lunches[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {   // the file is all-lunches.handlebars  handlebars extension assumed
    foods: lunches,
    eater: "david"
  });
});

// Initiate the listener.
app.listen(port);
