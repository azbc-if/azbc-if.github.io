function ls_status_view(xdate, xfile)
{
    status_container = document.createElement("span");
    status_container.className = "sf";
    status_container.innerHTML = xfile + "<br/>" + xdate

    return status_container
}
