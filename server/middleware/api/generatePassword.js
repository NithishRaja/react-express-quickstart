const generatePassword = require('password-generator');

module.exports = function(req, res){
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(function(i){
      generatePassword(12, false);
  });

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
}
