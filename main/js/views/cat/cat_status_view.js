function cat_status_view(xfile, xdate)
{
    element = document.createElement("span");
    element.className = "sf";
    element.innerHTML = xfile + "<br/>" + xdate

    return element;
}
