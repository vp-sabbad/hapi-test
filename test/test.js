// jshint node:true

module.exports = {
    setUp: function(callback) {
        this.server = require("../"); // ../index.js
        callback();
    },
    tearDown: function(callback) {
        this.server.stop(function() {
            console.log("Server stopped");
            callback();
        });
    },
    testSomething: function(test) {
        console.log("testSomething");
        var options = {
            method: "GET",
            url: "/"
        };

        this.server.inject(options, function(response) {
            test.equal(response.statusCode, 200);
            test.done();
        });
    }
};
