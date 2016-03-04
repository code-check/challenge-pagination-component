var assert = require("chai").assert;

describe("Pagination", function () {
    var $, $pagination, $next, $prev;

    before(function () {
        $ = global.window.$;
        $pagination = $("#pagination");
        $next = $("#btnNext"),
        $prev = $("#btnPrev");
    });

    it("must show 5 children", function () {
        assert.equal($pagination.children("li:not(.hidden)").length, 5);
    });

    it("must navigate back and forth", function () {
        var prev = parseInt($pagination.find(".active").text());

        $next.trigger("click");
        var cur = parseInt($pagination.find(".active").text());
        assert.equal(prev + 1, cur);

        $prev.trigger("click");
        cur = parseInt($pagination.find(".active").text());
        assert.equal(prev, cur);
    });
});