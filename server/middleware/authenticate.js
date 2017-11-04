
module.exports = function(req, res){
  req.session.isLoggedIn = true;
  req.session.user  = {
    email: req.body.email,
    id: req.body.id
  };
  res.status(200).json({"redirect" : "/"});
};
