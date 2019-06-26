function cat_glossary_other_controller(xgroup)
{
    myother_container = document.createElement("span");

    if (typeof xgroup === 'undefined' || xgroup === "") {
    } else {
        myother_header = cat_glossary_other_header_view();
        myother_container.appendChild(myother_header)
    }
    return myother_container
}
