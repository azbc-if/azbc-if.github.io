function post_single_subtitle(xtitle, xsubtitle, xtext, xfile)
{
    xdump("<div class=\"sh\">");
        xdump(xsubtitle);
    xdump("<hr class=\"dashed\"/>");
    xdump("</div>");

    xdump("<div>");
    xdump("<hr/>");
    xdump("<span class=\"shp\">self</span>");
    xdump("<hr/>");

    xdump("<p>");
    xdump("<span class=\"sa\">&lt;&gt;&nbsp;</span>");

    xdump("<span class=\"sf\">"); 
    xdump("<a href=\"?file=*&range=");
    xdump(data["xfile"]);
    xdump("\">");
    xdump(data["xfile"]);
    xdump("</a>");
    xdump("</span>");

    xdump("<span class=\"sa\">&nbsp;&nbsp;&nbsp;</span>");

    xdump("<span class=\"st\">");
    xdump(data["xtitle"]);
    xdump("</span>");

    xdump("<span class=\"sa\">&nbsp;::&nbsp;</span>");

    xdump("<span class=\"ss\">");
    xdump(data["xsubtitle"]);
    xdump("</span>");

    if (typeof data["xtext"] === 'undefined' || data["xtext"] === "") {
    } else {

        xdump("<span class=\"sa\">&nbsp;::&nbsp;</span>");
        xdump("<span class=\"sx\">");
        xdump(data["xtext"]);
        xdump("</span>");

    }

    xdump("</p>");
    xdump("</div>");
    xdump("<hr class=\"dashed\"/>");
}
