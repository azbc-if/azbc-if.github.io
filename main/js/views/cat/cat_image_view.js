function cat_image_view(xxhref, ximg)
{
    image_container = document.createElement("a");
    image_container.href = xxhref
    image_content = document.createElement("img");
    image_content.className = "postimage";
    image_content.src = ximg;

    image_container.appendChild(image_content);

    return image_container
}
