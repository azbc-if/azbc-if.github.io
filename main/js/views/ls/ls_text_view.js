function ls_text_view(xtext)
{
    text = document.createElement("span");
    text.className = "sx";
    text.innerHTML = xtext + "<br/>";

    return text
}
