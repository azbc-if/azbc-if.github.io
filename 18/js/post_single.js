function post_single(all_text)
{
    data = data_variables(all_text);

    xdump("<br/><span class=\"banner\"></span><br/>");

    xdump("<table class=\"table_single\">");
    xdump("<tr><td class=\"image_single\">");
        post_single_image(data["xfile"], data["ximage"]);
    xdump("</td><td class=\"text_single\">");
        post_single_subtitle(data["xtitle"], data["xsubtitle"], data["xtext"], data["xfile"]);
    xdump("<br/>")
        post_single_haiku(data["xhaiku"]);
    xdump("<br/>")
        post_single_comment(data["xcomment"]);
    xdump("<br/>")
        post_single_group(data["xgroup"]);
    xdump("</td><td class=\"menu_single\">");
        post_single_link(data["xlink"]);
        post_single_menu(data["xsiblings"], data["xsisters"]);
    xdump("</td><td class=\"status_single\">");
        post_single_status(data["xdate"], data["xfile"]);
    xdump("</td></tr></table>");

    xdump("<br/><span class=\"banner\"></span><br/>");


}
