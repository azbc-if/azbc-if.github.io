function ls_tags_view(xtags, step)
{
    tag = document.createElement("a");
    tag.className = "list-button normal";
    tag.href = xhref['tag'] + data['xtags'].split(" ")[step] 
    tag.innerHTML = data['xtags'].split(" ")[step];

    return tag;
}
