var middleware = require("./../middleware");
var configureApiRoutes = require("./api");

module.exports = function(app){
  // setting up api routes
  configureApiRoutes(app);

  // setting up normal routes
  app.route("/")
    .get(middleware.renderHome);

}
