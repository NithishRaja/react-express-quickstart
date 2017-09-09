const express = require('express');
const path = require('path');
var bodyparser = require("body-parser");
var configureViews = require("./views");
var configureRoutes = require("./routes");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

configureViews(app);

configureRoutes(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

if(exports.main === module){
  app.listen(app.get("port"), function(err){
    if(err) return console.log(err);
    console.log("Server is running on port %d, press Ctrl+C to close", app.get("port"));
  });
}else{
  module.exports = app;
}
