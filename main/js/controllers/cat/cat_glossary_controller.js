function cat_glossary_controller(xfile, xtitle, xtext, xcomment, xgroup)
{
    element_text = document.createElement("td");
    element_text.className = "text_single";

    title = cat_glossary_title_controller(xtitle);
    comment = cat_glossary_comment_controller(xcomment);
    own = cat_glossary_self_controller(xfile, xtitle, xtext);

    other = cat_glossary_other_controller(xgroup)

    element_text.appendChild(title);
    element_text.appendChild(comment);
    element_text.appendChild(own);
    element_text.appendChild(other);

    return element_text;
}
