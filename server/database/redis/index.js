var session = require('express-session');
var cookieParser = require("cookie-parser");
// var RedisStore = require("connect-redis")(session);
var redis = require("redis").createClient();

module.exports = function(app){

  app.use(session({
    secret: "redis-session",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
  }));

  // app.use(cookieParser("cookie-parser"));
  // app.use(session({
  //   // store: new RedisStore({
  //   //   host: '127.0.0.1',
  //   //   port: 6379,
  //   //   client: redis
  //   // }),
  //   store: new session({
  //     storage: "redis",
  //     instance: redis
  //   }),
  //   secret: "redis-session",
  //   resave: false,
  //   saveUninitialized: true,
  //   cookie: {secure: true}
  // }));
}

// var session = require('express-session');
//
// module.exports = function(session){
//
//   app.use(session({
//     secret: "redis-session",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure: true}
//   }));
// }
