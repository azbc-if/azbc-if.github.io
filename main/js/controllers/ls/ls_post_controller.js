function ls_post_controller(xtitle, xcomment, xfile, xtext, xtags)
{
    td_text = document.createElement("td");
    td_text.className = "text_all";

    title = ls_post_title_controller(xtitle, xcomment, xfile);
    td_text.appendChild(title);

    text = ls_post_text_controller(xtext);
    td_text.appendChild(text);

    if ( window.location.search.includes("page=") ) {
    } else {
        tags = ls_post_tags_controller(xtags);
        td_text.appendChild(tags);
    }

    return td_text
}
