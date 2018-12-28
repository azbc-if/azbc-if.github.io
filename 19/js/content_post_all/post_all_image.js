function post_all_image(xfile, ximage)
{

    if (typeof ximage === 'undefined' || ximage === "") {
    } else {
        xdump("<a href=\"?image=" + ximage.replace("small", "medium") + "&rel=" +
               xfile + "\"><img src=\"./img/");
        xdump(ximage);
        xdump("\" border=3 width=auto height=120></img></a>");

    }

}
