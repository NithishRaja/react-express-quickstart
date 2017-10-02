
module.exports = function(session){

  var RedisStore = require("connect-redis")(session);
  var redis = require("redis").createClient();

  return {
    store: new RedisStore({
      host: '127.0.0.1',
      port: 6379,
      client: redis
    })
  }
}
