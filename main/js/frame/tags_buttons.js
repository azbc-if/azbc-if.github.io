function tags_buttons(len) {
    var tag_name = query("tag");
    var tag_range = query("range");
    var amount = parseInt(len / 10);
    var n = 0
    if ( amount > 0 ) {
        tgs_but_align = document.createElement("div");
        tgs_but_align.className = "buttons_align";
        while ( n < amount + 1 ) {
            if ( parseInt(tag_range) == (n * 10 + 10)) { 
                var colour = "current" 
            } else {
                var colour = "normal"
            }
            tag_button = document.createElement("a");
            tag_button.className = "list-button " + colour;
            tag_button.href = xhref['tag_button'] + tag_name + "&range=" + (n * 10 + 10);
            tag_button.innerHTML = (n + 1);
            tgs_but_align.appendChild(tag_button);
            n++;
        }
    document.body.appendChild(tgs_but_align);
    }
}
