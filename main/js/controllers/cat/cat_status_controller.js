function cat_status_controller(xfile, xdate)
{
    td_status = document.createElement("td");
    td_status.className = "status_single";

    status_container = cat_status_view(xfile, xdate);
    td_status.appendChild(status_container);

    return td_status
}
