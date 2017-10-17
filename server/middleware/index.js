var path = require("path");
var apiMiddleware = require("./api");

exports.renderHome = function(req, res){
  res.render("home");
}

// exporting middleware for api routes
exports.api = apiMiddleware;
