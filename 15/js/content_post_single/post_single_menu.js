function post_single_menu(xsiblings, xsisters)
{

    if (typeof xsiblings === 'undefined' || xsiblings === "") {
        if (typeof xsisters === 'undefined' || xsisters === "" ) {
        } else {
        xdump("<span class=\"shp\">sister pages</span>");
        }
    } else {
        xdump("<span class=\"shp\">sister pages</span>");
    }

    if (typeof xsiblings === 'undefined' || xsiblings === "" ) {
    } else {

        var len = parseInt(xsiblings.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {

            xdump("<div class=\"sister\">");
            xdump("<span class=\"sa\">&nbsp;=&gt;&nbsp;</span>");
            xdump("<span class=\"sf\">");
            xdump("<a href=\"?file=");
            xdump(xsiblings.split(" ")[step]);
            xdump("\">");
            xdump(xsiblings.split(" ")[step]);
            xdump("</a>");
            xdump("</span>")
            xdump("</div>");
        }
    }

    if (typeof xsisters === 'undefined' || xsisters === "" ) {
    } else {
        var len = parseInt(xsisters.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {

            xdump("<div class=\"sister\">");
            xdump("<span class=\"sa\">&lt;=&gt;&nbsp;</span>");
            xdump("<span class=\"sf\">");
            xdump("<a href=\"?file=");
            xdump(xsisters.split(" ")[step]);
            xdump("\">");
            xdump(xsisters.split(" ")[step]);
            xdump("</a>");
            xdump("</span>")
            xdump("</div>");
            }
    }
}
