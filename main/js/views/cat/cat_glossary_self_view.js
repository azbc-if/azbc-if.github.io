function cat_glossary_self_view(xfile, xtitle, xtext)
{
    own_container = document.createElement("div");

    own_title = document.createElement("span");
    own_title.className = "shp border";
    own_title.innerHTML = cat['self'];

    own_arrow = document.createElement("span");
    own_arrow.class = "sa";
    own_arrow.innerHTML = "&lt;&gt;&nbsp;";

    own_link_container = document.createElement("span");
    own_link_container.className = "sf";

    own_link = document.createElement("a");
    own_link.href = xhref['all'] + xfile;
    own_link.innerHTML = xfile

    own_spacing = document.createElement("span");
    own_spacing.className = "sa";
    own_spacing.innerHTML = "&nbsp;&nbsp;&nbsp;"

    own_name = document.createElement("span");
    own_name.className = "st";
    own_name.innerHTML = xtitle;

    own_inner_spacing = document.createElement("span");
    own_inner_spacing.className = "sa";
    own_inner_spacing.innerHTML = "&nbsp;::&nbsp;";

    own_text = document.createElement("span");
    own_text.className = "sx";
    own_text.innerHTML = xtext;

    own_container.appendChild(own_title);
    own_container.appendChild(own_arrow);
    own_link_container.appendChild(own_link);
    own_container.appendChild(own_link_container);
    own_container.appendChild(own_spacing);
    own_container.appendChild(own_name);
    own_container.appendChild(own_inner_spacing);
    own_container.appendChild(own_text);
    
    return own_container;
}
