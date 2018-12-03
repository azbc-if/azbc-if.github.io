function list_tagged() {

  menu();

  step = number_of_files()

  while ( step > -1 ) {

    var file = xfill(step, 3);
    var dir = file.charAt(0);
    var subdir = file.charAt(1);

    file = "./data/" + dir + "/" + subdir + "/" + file + ".txt";
    read_file(file, file);

    step--
  }

  var range = query("range")
  var int_range = parseInt(range)

  for (var i in tags_list) {
    if ( (int_range - 11) < i && i < int_range ) { 
    read_file(tags_list[i], "tagged");
    }
  }

  tags_buttons(tags_list.length);

  status(tags_list.length);

}
