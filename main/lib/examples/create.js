function create(tag_name, class_name, text) {

    var element = document.createElement(tag_name);
    element.className = class_name;
    element.textContent = text

    return element;
}
