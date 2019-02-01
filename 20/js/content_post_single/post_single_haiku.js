function post_single_haiku(xhaiku)
{

    if (typeof xhaiku === 'undefined' || xhaiku === "" ) {
    } else {

         xdump("<div>");
         xdump("<hr/>");
         xdump("<span class=\"shp\">rehash</span>");
         xdump("<hr/>");

         xdump("<p>");
         xdump("<span class=\"sx\">");
             var verse = xhaiku.split(";")[0]
             var author = xhaiku.split(";")[1]
             array = verse.split("/");
             for ( var i = 0; i < array.length ; i++ ) {
                 xdump(array[i] + "<br/>");
             }
         xdump("</span>");
         xdump("</p>");

         if ( author ) {
             xdump("<p>");
             xdump("<span class=\"shp\">");
                 xdump(author);
             xdump("</span>");
             xdump("<hr/>");
             xdump("<p>");
         }

         xdump("</div>");
         xdump("<hr class=\"dashed\" />");

    }
}
