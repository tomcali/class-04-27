// Create an app with Express, MySQL and Handlebars.
//
//     HINT: this app will be very similar to the app
// your instructor just demonstrated and slacked out.
//     Please feel free to leverage that code when creating this code.
//     Create a schema.sql file and create the following inside of that file:
//
//     Make a database called “wishes_db”
//
// Inside of that database, make a table called “wishes”
// which will have a wish column and an id column.
// The id will be automatically incremented while also being the primary key.
//
// Run your schema.sql file within MySQL Workbench (or Sequel Pro)
// before moving onto the next steps.
//
//     In your server.js file, you will have to create
// two routes: a get route for ‘/’ and a post route for ‘/’.
//
// Render all of the wishes from the wishes table when the ‘/’
// get route is hit. Additionally show the form that the user
// can use to create a new wish. The form will POST to the ‘/’ route.
//
//     The ‘/’ post route will insert the wish from the form
// into the wishes table and will redirect the user back to the ‘/’get route.

var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wishes_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "event_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

// Root get route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM events;", function(err, data) {
      if (err) throw err;

      // Test it
      // console.log('The solution is: ', data);

      // Test it
      // res.send(data);

      res.render("index", { events: data });
    });
});


// Post route -> back to home
app.post("/", function(req, res) {

    // Test it
    // console.log('You sent, ' + req.body.event);

    // Test it
    // res.send('You sent, ' + req.body.event);

  connection.query("INSERT INTO events (event) VALUES (?)", [req.body.event], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});

app.listen(port);
