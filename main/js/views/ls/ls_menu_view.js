function ls_menu_view(xlink)
{
    total_container = document.createElement("span");
    var xxhref = xlink.split("](")[1].split(")")[0]
    var text = xlink.split("](")[0].split("[")[1]

    if ( text ) {
        icon_container = document.createElement("span");
        icon_container.className = "sa"
        icon_container.innerHTML = "-&gt;&nbsp;"

        link_container = document.createElement("span");
        link_container.className = "sf"

        link = document.createElement("a");
        link.href = xxhref
        link.innerHTML = text

        total_container.appendChild(icon_container);
        link_container.appendChild(link);
        total_container.appendChild(link_container);
    }
    return total_container
}
