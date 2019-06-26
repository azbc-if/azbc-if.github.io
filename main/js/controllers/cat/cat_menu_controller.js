function cat_menu_controller(xlink, xsiblings, xsisters)
{
    td_menu = document.createElement("td");
    td_menu.className = "menu_single";

    ref_link = cat_menu_link_controller(xlink);
    sisters = cat_menu_sisters_controller(xsiblings, xsisters);

    td_menu.appendChild(ref_link);
    td_menu.appendChild(sisters);

    return td_menu;
}
