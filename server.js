var express = require("express");

var app = express();

var counter = 1;

// Tell the express app to listen on port 8000
app.listen(5000, function() {
  console.log("listening on port 5000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/counter", function (request, response){
   
    
    response.render("counter",{counter:counter});
})
  app.get("/count", function (request, response){
   counter++;
    
    response.redirect("/counter");
})
  app.get("/reset", function (request, response){
   counter = 1;
    
    response.redirect("/counter");
})








