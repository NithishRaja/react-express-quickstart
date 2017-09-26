var middleware = require("./../middleware");

module.exports = function(app){

  app.route("/api/passwords")
    .get(middleware.api.generatePasswords);

}
