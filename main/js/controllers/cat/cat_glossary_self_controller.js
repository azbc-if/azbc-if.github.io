function cat_glossary_self_controller(xfile, xtitle, xtext)
{
    self_container = document.createElement("span");

    own_content = cat_glossary_self_view(xfile, xtitle, xtext);
    self_container.appendChild(own_content);

    return self_container;
}
