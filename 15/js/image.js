function image() {

    var ximg = query("image");
    var xrel = query("rel");

    xdump("<div class=\"image_container\">");
    xdump("<a href=\"?file=*&range=");
    xdump(xrel);
    xdump("\">");
    xdump("<img src=\"./img/" + ximg + "\" ");
    xdump(" class=\"image\"></a></div>");

}
