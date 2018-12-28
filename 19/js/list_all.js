function list_all() {

    var range = query("range");
    var step = parseInt(range);
    var stop = step - 10;

    while ( step > stop ) {

        var file = xfill(step, 3);
        var dir = file.charAt(0);
        var subdir = file.charAt(1);
        var file = "./data/" + dir + "/" + subdir + "/" + file + ".txt";

        read_file(file, "all");

        step--
    }

}
