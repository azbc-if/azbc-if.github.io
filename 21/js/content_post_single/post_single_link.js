function post_single_link(xlink)
{

    if (typeof xlink === 'undefined' || xlink === "" ) {
    } else {

        var href = xlink.split("](")[1].split(")")[0]
        var text = xlink.split("](")[0].split("[")[1]

        if ( text ) {

            xdump("<p>");
            xdump("<span class=\"shp\">ref. link</span>");
            xdump("<br/>");
            xdump("<span class=\"sa\">&nbsp;-&gt;&nbsp;</span>");
            xdump("<span class=\"sf\">");
            xdump("<a href=\"" + href + "\">");
                xdump(text);
            xdump("</a>");
            xdump("</span>");
            xdump("</p>");
        }
    }
}
