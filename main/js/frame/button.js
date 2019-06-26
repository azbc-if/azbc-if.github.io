function button() {
    var files = number_of_files();
    tag_range = query("range")
    var amount = parseInt(files / 10);
    var n = 0
    if ( amount > 0 ) {
        but_align = document.createElement("div");
        but_align.className = "buttons_align";
        while ( n < amount + 1 ) {
            var number = (files - n * 10);
            var filled_number = xfill( number, 3 );
            if ( parseInt(tag_range) == (files - n * 10)) {
                var colour = "current"
            } else {
                var colour = "normal" }
            list_button = document.createElement("a");
            list_button.className = "list-button " + colour;
            list_button.href = xhref['all'] + filled_number;
            list_button.innerHTML = (n + 1);
            but_align.appendChild(list_button);
            n++
        }
        document.body.appendChild(but_align);
    }
}
