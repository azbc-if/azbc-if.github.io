function post_all_title(xsubtitle, xfile, xtitle)
{

                if (typeof xsubtitle === 'undefined' || xsubtitle === "") {
                     xdump("<span class=\"ssh\">");
                     xdump("<span style=\"color: gray\">" + xtitle + "</span>");
                     xdump("</span>");
                } else {
                     xdump("<span class=\"ssh\">");
                     xdump("<a href=\"?file=");
                     xdump(xfile);
                     xdump("\">");
                     xdump(xtitle);
                     xdump("</a>");
                     xdump("</span>");
                }

}
