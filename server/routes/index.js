var path = require("path");
var middleware = require("./../middleware");

module.exports = function(app){

  // Put all API endpoints under '/api'
  app.route("/api/passwords")
    .get(middleware.api.generatePasswords);

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.route("*")
    .get(middleware.catchAll);

}
