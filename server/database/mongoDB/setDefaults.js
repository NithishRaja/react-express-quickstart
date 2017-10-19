
module.exports = function(mongo){
  var collection = mongo.DB.collection("YOUR_COLLECTION_NAME");

  var query = {};

  var newDocument = {
    $setOnInsert: {
      //your data object comes here
    }
  };

  var options = {
    upsert: true,
    returnOriginal: false
  };

  // if data doesn't exist update database
  collection.findOneAndUpdate(query, newDocument, options, function(err, res){
    console.log("default values set");
  });

}
