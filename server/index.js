// importing vendor modules
const express = require('express');
const path = require('path');
var bodyparser = require("body-parser");
var session = require('express-session');
var cookieParser = require("cookie-parser");

//importing local modules
var configureViews = require("./views");
var configureRoutes = require("./routes");
var configureSessionDatabase = require("./database/redis");

// initializing express app
const app = express();

// setting port value
app.set("port", process.env.PORT || 5000);

// setting up sessions and cookies
app.use(cookieParser("cookie-parser"));
app.use(session(configureSessionDatabase(session)));

// using body-parser to read post body
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

// setting up views
configureViews(app);

// setting up routes
configureRoutes(app);

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
