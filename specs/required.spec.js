var assert = require("chai").assert;

describe("Required", function () {
    it("window must be in the global scope", function () {
        assert.isDefined(global.window);
        assert.isNotNull(global.window);
    });

    it("window must have jQuery defined", function () {
        assert.isDefined(global.window.$);
        assert.isNotNull(global.window.$);
        assert.isDefined(global.window.jQuery);
        assert.isNotNull(global.window.jQuery);
    });

    it("should not remove/change existing elements", function () {
        var $ = global.window.$,
            $pagination = $("#pagination"),
            $prev = $("#btnPrev"),
            $next = $("#btnNext");

        assert.equal($pagination.length, 1);
        assert.equal($prev.length, 1);
        assert.equal($next.length, 1);

        var count = 0;
        $pagination.children("li").each(function () {
            count++;
            assert.match($(this).text(), /^\d{1,}$/, "All content in the list must consist out of numbers");
        });
        assert.equal(count, 20, "Please do not remove or add any list items");
    });
});