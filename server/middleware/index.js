const generatePassword = require('password-generator');
var path = require("path");

exports.api = {
  generatePasswords : function(req, res){
    const count = 5;

    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
      generatePassword(12, false)
    )

    // Return them as json
    res.json(passwords);

    console.log(`Sent ${count} passwords`);
  }
}

exports.catchAll = function(req, res){
  res.sendFile(path.join(__dirname, "./../../client", "build", "index.html"));
}
