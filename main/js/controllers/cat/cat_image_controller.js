function cat_image_controller(xfile)
{
    td_image = document.createElement("td");
    td_image.className = "image_single";

    var img_exists = url_exists( img_path_small(xfile) )
    var ximg = img_path_small(xfile)
    var xxhref = xhref['image'] + img_path_medium(xfile) + "&rel=" + xfile

    if (img_exists === true) {
        image = cat_image_view(xxhref, ximg);
        td_image.appendChild(image);
    }
    return td_image
}
