function ls_post_text_controller(xtext)
{
    span_text = document.createElement("span");

    if (typeof xtext === 'undefined' || xtext === "") {
    } else {
        text = ls_text_view(xtext);
        span_text.appendChild(text);
    }
    return span_text
}
