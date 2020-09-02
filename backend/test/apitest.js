let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("../app");
//Our parent block
describe("Games Test", () => {
 describe("/GET games", () => {
     it("it should GET all the games", (done) => {
     chai.request(server)
       .get("/api/games/gamesList")
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a("object");
             done();
          });
       });
  });
describe("/GET topics", () => {
     it("it should GET a list of topics", (done) => {
     chai.request(server)
         .get("/api/games/topics")
         .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a("object");
               done();
            });
         });
     });
});