var server = require("./server");

server.listen(server.get("port"), function(err){
  if(err) return console.log(err);
  console.log("Server is running on port %d, press Ctrl+C to close", server.get("port"));
});
