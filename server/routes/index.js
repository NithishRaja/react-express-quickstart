var middleware = require("./../middleware");
var configureApiRoutes = require("./api");

module.exports = function(app, api){
  // setting up api routes
  configureApiRoutes(api);

  // setting up normal routes
  app.route("/")
    .get(middleware.renderHome);

}
