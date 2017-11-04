
module.exports = function(req, res){
  console.log(req.session);
  res.locals = { "email": req.session.user.email };
  console.log(res.locals);
  res.render("home");
};
