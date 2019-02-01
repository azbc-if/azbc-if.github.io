function list_single() {

    var number = query("file")
    var xfile = xfill(number, 3);
    var dir = xfile.charAt(0);
    var subdir = xfile.charAt(1);
    var file = "./data/" + dir + "/" + subdir + "/" + xfile + ".txt"

    read_file(file, "single")

}
