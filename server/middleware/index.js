var path = require("path");
var apiMiddleware = require("./api");

exports.catchAll = function(req, res){
  res.sendFile(path.join(__dirname, "./../../client", "build", "index.html"));
}

exports.api = apiMiddleware;
