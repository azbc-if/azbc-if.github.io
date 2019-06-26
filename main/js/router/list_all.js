function list_all() {

    var range = query("range");
    var step = parseInt(range);
    var stop = step - 10;

    while ( step > stop ) {

        var num = xfill(step, 3);
        var file = file_path(step)

        read_file(file, num, "view");

        step--
    }

}
