function post_single_group(xgroup)
{

    if (typeof xgroup === 'undefined' || xgroup === "") {
    } else {

        xdump("<div>");
        xdump("<hr/>");
        xdump("<span class=\"shp\">group</span>");
        xdump("<hr/>");

        var len = parseInt(xgroup.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {

            xdump("<p>");
            var new_file = xgroup.split(" ")[step];
            list_group(new_file);
            xdump("<hr/></p>");

        }

        xdump("</div>");
        xdump("<hr class=\"dashed\"/>");
  
    }

}
