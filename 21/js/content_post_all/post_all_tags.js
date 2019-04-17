function post_all_tags(xtags)
{

    if (typeof xtags === 'undefined' || xtags === "") {
    } else {

        xdump("<small>");

        len = parseInt(xtags.split(" ").length);
        var step;

        for ( step = 0; step < len; step++ ) {

            xdump("<a href=\"?tag=")
            xdump(xtags.split(" ")[step]);
            xdump("&range=10\" ")
            xdump("class=\"list-button normal\">");
            xdump(xtags.split(" ")[step]);
            xdump("</a>");
        }

        xdump("</small>");
    }

}
