function acronym() {

    var container, name, pipe, num, next

    container = document.createElement("span");
    container.className = "icon";

    num = number_of_acronyms; //2;
    for (var next in brand) {
        name = document.createElement("a");
        name.textContent = brand[next];
        name.href = xhref['page'] + xfill(num, 3);
        container.appendChild(name);

        if ( num > 0 ) {
            pipe = document.createElement("span");
            pipe.className = "gray";
            pipe.textContent = " | ";
            container.appendChild(pipe);
        }
        num = num - 1
    }
    document.body.appendChild(container)
}
