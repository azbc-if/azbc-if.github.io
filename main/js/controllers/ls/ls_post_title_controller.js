function ls_post_title_controller(xtitle, xcomment, xfile)
{
    span_title = document.createElement("span");

    if (typeof xtitle === 'undefined' || xtitle === "") {
    } else {
        if (typeof xcomment === 'undefined' || xcomment === "") {
            title = ls_title_view(xtitle)
        } else {
            title = ls_a_title_view(xtitle, xfile);
        }
        span_title.appendChild(title);
    }

    return span_title
}
