function cat_link_view(xxhref, xtext)
{
    container = document.createElement("p");

    title = document.createElement("span");
    title.className = "shp";
    title.innerHTML = "ref. link<br/>";

    arrow = document.createElement("span");
    arrow.className = "sa";
    arrow.innerHTML = "&nbsp;-&gt;&nbsp;";

    link_container = document.createElement("span");
    link_container.className = "sf";

    link = document.createElement("a");
    link.href = xxhref;
    link.innerHTML = xtext;

    container.appendChild(title);
    container.appendChild(arrow);
    link_container.appendChild(link);
    container.appendChild(link_container);

    return container;
}
