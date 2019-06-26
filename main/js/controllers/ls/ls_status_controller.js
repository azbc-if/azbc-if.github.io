function ls_status_controller(xdate, xfile)
{
    td_status = document.createElement("td");
    td_status.className = "status_all";

    status_container = ls_status_view(xdate, xfile);
    td_status.appendChild(status_container);

    return td_status
}
