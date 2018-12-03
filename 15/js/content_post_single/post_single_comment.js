function post_single_comment(xcomment)
{

    if (typeof xcomment === 'undefined' || xcomment === "" ) {
    } else {

         xdump("<div>");
         xdump("<hr/>");
         xdump("<span class=\"shp\">comment</span>");
         xdump("<hr/>");

//         xdump("<p>");
//         xdump("<span class=\"ss\">");
//         xdump(xcomment);
//         xdump("</span>");
//         xdump("</p>");

         xdump("<p>");
         xdump("<span class=\"ss\">");
//             array = xcomment.split(" / ");
//             for ( var i = 0; i < array.length ; i++ ) {
//                 xdump(array[i] + "<br/>");
//             }

xdump(xcomment);
         xdump("</span>");
         xdump("</p>");

         xdump("</div>");
         xdump("<hr class=\"dashed\" />");

    }
}
