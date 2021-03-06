// importing vendor modules
const express = require('express');
const path = require('path');
var bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("cookie-session");
var vhost = require("vhost");
var redisSession = require('node-redis-session');
// var redis = require('redis');
// var client = redis.createClient(6379, 'localhost');

//importing local modules
var configureViews = require("./views");
var configureRoutes = require("./routes");

// initializing express app
const app = express();
const api = express();

// setting port value
app.set("port", process.env.PORT || 5000);

// setting up sessions and cookies
app.use(cookieParser("cookie-parser"));
app.use(redisSession());

// using body-parser to read post body
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// setting up views
configureViews(app);

// setting up separate subdomain for api calls
app.use(vhost("api.localhost", api));

// setting up routes
configureRoutes(app, api);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

if(exports.main === module){
  // listen to port
  app.listen(app.get("port"), function(err){
    if(err) return console.log(err);
    console.log("Server is running on port %d, press Ctrl+C to close", app.get("port"));
  });
}else{
  // export module
  module.exports = app;
}
