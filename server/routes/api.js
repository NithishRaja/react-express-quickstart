var middleware = require("./../middleware");

module.exports = function(api){

  api.route("/api/passwords")
    .get(middleware.api.generatePasswords);

}
