function post_all_menu(xlink)
{

    if (typeof xlink === 'undefined' || xlink === "" ) {
    } else { 
        var href = xlink.split("](")[1].split(")")[0]
        var text = xlink.split("](")[0].split("[")[1]

        if ( text ) {

            xdump("<span class=\"sa\">-&gt;&nbsp;</span>");
            xdump("<span class=\"sf\">");
            xdump("<a href=\"" + href + "\">");
            xdump(text);
            xdump("</a>");
            xdump("</span>");

        }
    }
}
