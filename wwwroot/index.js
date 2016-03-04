
//BEGIN_CHALLENGE
$(function () {
    var $pagination = $("#pagination"),
        $prev = $("#btnPrev"),
        $next = $("#btnNext"),
        $active = $pagination.find(".active"),
        cur = parseInt($active.text()),
        start = 1,
        end = 20;

    $prev.on("click", function () {
        if (cur > start)
            cur--;
        setActive();
    });

    $next.on("click", function () {
        if (cur < end)
            cur++;
        setActive();
    });

    function setActive() {
        $pagination.find(".active").removeClass("active");

        var center = cur;
        if (center < start + 2)
            center = start + 2;
        if (center > end - 2)
            center = end - 2;
        center--;

        $pagination.children("li").each(function (i) {
            var $this = $(this);
            if (i === cur - 1)
                $this.addClass("active");
            var diff = center > i ? center - i : i - center;
            if (diff > 2)
                $this.addClass("hidden");
            else
                $this.removeClass("hidden");
        });
    }
    setActive();
});
//END_CHALLENGE