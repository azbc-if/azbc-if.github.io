function ls_menu_controller(xlink)
{
    td_menu = document.createElement("td");
    td_menu.className = "menu_all";

    if (typeof xlink === 'undefined' || xlink === "" ) {
    } else {
        link = ls_menu_view(xlink);
        td_menu.appendChild(link);
    }

    return td_menu
}
