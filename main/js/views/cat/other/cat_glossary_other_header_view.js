function cat_glossary_other_header_view()
{
    other_title = document.createElement("span");
    other_title.className = "shp border";
    other_title.innerHTML = cat['other'];

    return other_title;
}
