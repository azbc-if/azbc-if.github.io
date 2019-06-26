function ls_title_view(xtitle)
{
   title = document.createElement("span");
   title.className = "ssh";
   title.style = "color: gray"
   title.innerHTML = xtitle + "<br/>";

    return title
}

function ls_a_title_view(xtitle, xfile)
{
    title = document.createElement("a");
    title.className = "ssh";
    title.href = xhref['post'] + xfile
    title.innerHTML = xtitle + "<br/>";

    return title
}
