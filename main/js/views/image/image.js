function image() {

    var container, link, image, ximg, xrel

    ximg = query("image");
    xrel = query("rel");

    container = document.createElement("div");
    container.className = "image_container";

    link = document.createElement("a"); 
    link.href = xhref['all'] + xrel

    image = document.createElement("img");
    image.src = ximg;
    image.className = "image";

    link.appendChild(image);
    container.appendChild(link);
    document.body.appendChild(container);


}
