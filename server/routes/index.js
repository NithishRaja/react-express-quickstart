var path = require("path");
var middleware = require("./../middleware");

module.exports = function(app){
  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.route("/")
    .get(middleware.renderHome);

}
