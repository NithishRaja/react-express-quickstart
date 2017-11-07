// importing vendor modules
const express = require('express');
const path = require('path');
var bodyparser = require("body-parser");
var session = require('cookie-session');
var cookieParser = require("cookie-parser");
var vhost = require("vhost");

// importing local modules
var configureViews = require("./views");
var configureRoutes = require("./routes");
var configureMainDatabase = require("./database/mongoDB").connect;

// initializing express app
const app = express();
const api = express();

// setting port value
app.set("port", process.env.PORT || 5000);

// setting up cookies and sessions
app.use(cookieParser("cookie-parser"));
app.use(session({keys:["mykey"]}));

// using body-parser to read post info
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// setting up mongoDB
configureMainDatabase(app);

// setting up views
configureViews(app);

// setting up separate subdomain for api calls
app.use(vhost("api.localhost", api));

// setting up routes
configureRoutes(app, api);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

if(exports.main === module){
  // listening to port
  app.listen(app.get("port"), function(err){
    if(err) return console.log(err);
    console.log("Server is running on port %d, press Ctrl+C to close", app.get("port"));
  });
}else{
  // export module
  module.exports = app;
}
