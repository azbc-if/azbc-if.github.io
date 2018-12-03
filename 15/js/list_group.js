function list_group(file) {

    var dir = file.charAt(0);
    var subdir = file.charAt(1);

    file = "./data/" + dir + "/" + subdir + "/" + file + ".txt";
    read_file(file, "group");

}
