// You will edit the server.js file, the dog.handlebars file,
//    and the index.handlebars file in an attempt to recreate
// the application that we demonstrated just a couple of minutes ago.
//    Instructions on what to do are contained within each file you will have to edit.

//    You won’t be using MySQL for this exercise
// but will instead be using the animals array in the server.js file.

var express = require("express");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
    res.render("dog", animals[0]); // look for dog.handlebars inside views directory
    });
  // 1. Send the dog object from the animals array to the dog.handlebars file.


app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
        res.render("dog", animals[0]); // look for dog.handlebars inside views directory
});
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.


app.get("/all-non-pets", function(req, res) {
    res.render("dog", animals[0]); // look for dog.handlebars inside views directory
});
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.



app.listen(port);
