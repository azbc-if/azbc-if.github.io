function tags_buttons(len) {

    var tag_name = query("tag");
    var tag_range = query("range");
    var amount = parseInt(len / 10);
    var n = 0

    if ( amount > 0 ) {
        xdump("<div class=\"buttons_align\">");

        while ( n < amount + 1 ) {
            if ( parseInt(tag_range) == (n * 10 + 10)) { 
                var colour = "current" 
            } else {
                var colour = "normal"
            }

            xdump("<a class=\"list-button " + colour + 
                          "\" href=\"?tag=" + tag_name + "&range=");
            xdump(n * 10 + 10);
            xdump("\">");
            xdump(n + 1);
            xdump("</a>");

            n++;
        }

    xdump("</div>");

    }

}
