function return_box(class_name, next, self, main) {

    element = document.createElement("a");
    element.classList.add(class_name);
    element.href = "#"; //next=" + next + "&current=" + self ;
    element.onclick = function(arg1, arg2, arg3) {
                          return function() { show_hide(arg1, arg2, arg3) }
                      } (next, self, main);
    return element
}
