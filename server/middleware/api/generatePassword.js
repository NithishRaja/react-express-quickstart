const generatePassword = require('password-generator');

module.exports = function(req, res){
  // Generate some password
  var passwords = generatePassword(12, false);

  // Return them as json
  res.json(passwords);

  console.log(`Sent password`);
}
