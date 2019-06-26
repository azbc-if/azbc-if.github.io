function footer()
{
    var xurl = window.location.href;
    if ( xurl.indexOf('?') != -1 ) {
        if ( xurl.indexOf('?route=image') !== -1 ) {
        } else {
            bot_mar = document.createElement("div");
            bot_mar.className = "bottom_margin";
            document.body.appendChild(bot_mar);
        }
    }
}
