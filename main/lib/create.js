function span_(class_name, text) {

    var element

    element = document.createElement("span");
    element.className = class_name;
    element.innerHTML = text

    return element;
}
