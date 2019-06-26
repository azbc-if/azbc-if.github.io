function list_tagged() {

  step = number_of_files()
  while ( step > -1 ) {

    var num = xfill(step, 3);
    file = file_path(num);

    read_file(file, num, "select");
    step--
  }
  var range = query("range")
  var int_range = parseInt(range)
  for (var i in tags_list) {
    if ( (int_range - 11) < i && i < int_range ) {
        tagnum = tags_list[i].split("/")[4].split(".")[0]
        read_file(tags_list[i], tagnum, "view");
    }
  }
}
