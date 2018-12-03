function post_all_text(xtext)
{

    if (typeof xtext === 'undefined' || xtext === "") {
    } else {

        xdump("<span class=\"sx\">");
        xdump(xtext)
        xdump("</span>");

    }

}
