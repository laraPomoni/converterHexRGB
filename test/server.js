var expect  = require("chai").expect;
var request = require("request");

describe("VASP API", function() {

    describe("Check if a street exists", function() {
  
      var url = "http://localhost:3000/street?idCmn=1234";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          console.log(response);
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("Returns the value", function(done) {
        request(url, function(error, response, body) {
          console.log(body);
          expect(body).to.be.a('string');
          done();
        });
      });
  
    });
  
  });