var assert = require("chai").assert,
    jsdom = require("jsdom"),
    fs = require("fs");

before(function (done) {
    jsdom.env({
        html: fs.readFileSync("./wwwroot/index.html", "utf-8"),
        resourceLoader: function (resource, callback) {
            // If protocol is set, default
            if (resource.url.protocol)
                return resource.defaultFetch(callback);
            // If protocol is not set, look in the wwwroot folder
            return callback(null,
                fs.readFileSync("./wwwroot/" + resource.url.pathname, "utf-8"));
        },
        features: {},
        done: function (errors, window) {
            assert.isNull(errors);
            global.window = window;
            done();
        }
    });
});