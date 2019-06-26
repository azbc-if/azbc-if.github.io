function cat_glossary_title_controller(xtitle)
{
    container = document.createElement("span");

    if (typeof xtitle === 'undefined' || xtitle === "") {
    } else {
        title = cat_glossary_title_view(xtitle);
        container.appendChild(title);
    }

    return container;
}
