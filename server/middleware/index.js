var path = require("path");
var apiMiddleware = require("./api");

exports.renderHome = function(req, res){
  res.render("home");
}

exports.loginCheck = function(req, res, next){
  if(req.session.isLoggedIn === true){
    next();
  }else{
    res.redirect(303, "/login");
    next();
  }
}

exports.renderLogin = function(req, res){
  res.render("login");
}

// exporting middleware for api routes
exports.api = apiMiddleware;
