function menu() {

    var files, container, menu_name, menu_status, first_item, pipe, second_item;
    files = number_of_files();

    container = span_( classname="menu", html="");
    menu_name = span_( classname="", html= " | " + menu_bar["name"] );
    menu_status = span_( classname="", html=" | * | ");

    container.appendChild(menu_name);
    container.appendChild(menu_status);

    var string = window.location.search

    if (string.includes("file=*")) {
    } else {
        first_item = document.createElement("a");
        first_item.href = xhref['all'] + number_of_files();
        first_item.textContent = menu_bar['all_posts'];
        container.appendChild(first_item);
    }
    document.body.appendChild(container);
}
