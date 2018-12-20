function post_single_image(xfile, ximage)
{

    if (typeof ximage === 'undefined' || ximage === "") {
    } else {

        xdump("<a href=\"?image=" + ximage.replace("small", "medium") +
            "&rel=" + xfile + "\"><img src=\"./img/");
        xdump(ximage);
        xdump("\" border=3 width=200 height=auto></img></a>");

    }

}
