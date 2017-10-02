var supertest = require("supertest");

var server = require("./../index.js");

describe("requests to api routes", function(){
  describe("/api/passwords", function(){
    it("returns json", function(done){
      supertest(server)
        .get("/api/passwords")
        .expect("Content-Type", /json/);
        done();
    });

    it("returns 5 passwords", function(done){
      supertest(server)
        .get("/api/passwords")
        .expect(/1234567890/);
        done();
    });
  });
});
