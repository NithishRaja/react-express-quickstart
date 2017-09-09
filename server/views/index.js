var expressLayouts = require("express-ejs-layouts");

module.exports = function(app){

  app.set("views", __dirname);
  app.set("view engine", "ejs");
  app.set("layout extractScripts", true);
  app.set("layout extractStyles", true);
  app.use(expressLayouts);

}
