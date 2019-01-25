window.onload = setPrimaryNavigation;

function setPrimaryNavigation() {
    var path = window.location.pathname;
    path = path.substring(1, path.length);
    path = decodeURIComponent(path);

    $(".primary-nav a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === (href)) {
            $(this).closest('a').addClass('active');
        }
    });
}
