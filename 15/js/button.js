function button() {

    var files = number_of_files();

    tag_range = query("range")
    var amount = parseInt(files / 10);
    var n = 0

    if ( amount > 0 ) {

        xdump("<div class=\"buttons_align\">");

        while ( n < amount + 1 ) {

            var number = (files - n * 10);
            var filled_number = xfill( number, 3 );

            if ( parseInt(tag_range) == (files - n * 10)) {
                var colour = "current"
            } else {
                var colour = "normal"
            }

            xdump("<a class=\"list-button " + colour + "\" href=\"?file=*&range=");
            xdump(filled_number)
            xdump("\">");
            xdump(n + 1);
            xdump("</a>");

            n++
        }

        xdump("</div>");

    }

}
