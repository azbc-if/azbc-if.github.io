function cat_menu_sisters_controller(xsiblings, xsisters)
{
    element = document.createElement("span");

    if (typeof xsiblings === 'undefined' || xsiblings === "") {
        if (typeof xsisters === 'undefined' || xsisters === "" ) {
        } else {
            title = cat_sisters_title_view();
            element.appendChild(title);
        }
    } else {
        title = cat_sisters_title_view();
        element.appendChild(title);
    }

    if (typeof xsiblings === 'undefined' || xsiblings === "") {
    } else {
        var len = parseInt(xsiblings.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {
            sibling = cat_sisters_arrow_view(xsiblings.split(" ")[step], "&nbsp;=&gt;&nbsp")
            element.appendChild(sibling);
        }
    }

    if (typeof xsisters === 'undefined' || xsisters === "" ) {
    } else {
        var len = parseInt(xsisters.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {
            sister = cat_sisters_arrow_view(xsisters.split(" ")[step], "&lt;=&gt;&nbsp;")
            element.appendChild(sister);
        }
    }

    return element;
}
