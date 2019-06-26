function cat_menu_link_controller(xlink)
{
    element = document.createElement("span");

    if (typeof xlink === 'undefined' || xlink === "" ) {
    } else {
        var xhref = xlink.split("](")[1].split(")")[0]
        var xtext = xlink.split("](")[0].split("[")[1]
        if ( xtext ) {
            ref_link = cat_link_view(xhref, xtext);
            element.appendChild(ref_link);
        }
    }

    return element;
}
