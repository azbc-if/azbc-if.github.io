function post_group(all_text)
{
    fact = data_group(all_text);

    if (typeof fact["xtit"] === 'undefined' || fact["xtit"] === "") {
    } else {
        xdump("<span class=\"sa\">-&gt;&nbsp;</span>")
        xdump("<span class=\"sf\">");
        xdump("<a href=\"?file=");
        xdump(fact["xfil"]);
        xdump("\">");
        xdump(fact["xfil"]);
        xdump("</a>");
        xdump("</span>");
    }

    if (typeof fact["xtit"] === 'undefined' || fact["xtit"] === "") {
    } else {

        xdump("<span class=\"sa\">&nbsp;&nbsp;&nbsp;</span>");
        xdump("<span class=\"st\">");
        xdump(fact["xtit"]);
        xdump("</span>");

    }

    if (typeof fact["xsub"] === 'undefined' || fact["xsub"] === "") {
    } else {

        xdump("<span class=\"sa\">&nbsp;::&nbsp;</span>");
        xdump("<span class=\"ss\">");
        xdump(fact["xsub"]);
        xdump("</span>");

    }

    if (typeof fact["xtxt"] === 'undefined' || fact["xtxt"] === "") {
    } else {

        xdump("<span class=\"sa\">&nbsp;::&nbsp;</span>");
        xdump("<span class=\"sx\">");
        xdump(fact["xtxt"]);
        xdump("</span>");

    }

}
