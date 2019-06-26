function list_single() {

    file = file_path(query("file"))
    read_file(file, query("file"), "view")
}
