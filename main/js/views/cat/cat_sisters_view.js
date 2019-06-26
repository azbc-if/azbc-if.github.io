function cat_sisters_title_view()
{
    element_cat_sisters_title_view = document.createElement("span");
    element_cat_sisters_title_view.className = "shp";
    element_cat_sisters_title_view.innerHTML = "sister pages<br/>";

    return element_cat_sisters_title_view;
}

function cat_sisters_arrow_view(file, sign)
{
    container = document.createElement("div");
    container.className = "sister";

    arrow = document.createElement("span");
    arrow.className = "sa";
    arrow.innerHTML = sign;

    link_container = document.createElement("span");
    link_container.className = "sf";

    link = document.createElement("a");
    link.href = xhref['post'] + file;
    link.innerHTML = file;

    container.appendChild(arrow);
    link_container.appendChild(link);
    container.appendChild(link_container);

    return container
}

