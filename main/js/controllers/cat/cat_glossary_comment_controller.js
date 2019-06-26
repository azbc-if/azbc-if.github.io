function cat_glossary_comment_controller()
{
    container = document.createElement("span");

    if (typeof data['xcomment'] === 'undefined' || data['xcomment'].trim() === "") {
    } else {
        comment = cat_glossary_comment_view(data['xcomment']);
        container.appendChild(comment);
    }

    return container;
}
