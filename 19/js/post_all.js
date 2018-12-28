function post_all(all_text)
{
    data = data_variables(all_text);

    xdump("<table class=\"main_table\"><tr><td class=\"symbol_all\">")
        post_all_symbol(data["xsymbol"]);
    xdump("</td><td class=\"text_all\">")

        post_all_title(data["xsubtitle"], data["xfile"], data["xtitle"]);
    xdump("<br/>")
        post_all_text(data["xtext"]);
    xdump("<br/>")
        post_all_tags(data["xtags"]);

    xdump("</td><td class=\"image_all\">")
        post_all_image(data["xfile"], data["ximage"]);
    xdump("</td><td class=\"menu_all\">")
        post_all_menu(data["xlink"]);
    xdump("</td><td class=\"status_all\">")
        post_all_status(data["xdate"], data["xfile"]);
    xdump("</td></tr></table>")


}
