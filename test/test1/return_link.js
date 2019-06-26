function return_link(class_name, link, text) {

    element = document.createElement("a");
    element.classList.add(class_name);
    element.href = link;
    element.textContent = text;
    return element;

}
