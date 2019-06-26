function ls_image_controller(xfile)
{
    td_image = document.createElement("td");
    td_image.className = "image_all";

    var img_exists = url_exists( img_path_small(xfile) )
    var ximg = img_path_small(xfile)
    var xhref = "?route=image&image=" + img_path_medium(xfile) + "&rel=" + xfile

    if (img_exists === true) {
        image = ls_image_view(xhref, ximg);
        td_image.appendChild(image);
    }
    return td_image
}

