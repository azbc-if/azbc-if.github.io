function list_news() {

  step = number_of_files()

  while ( step > -1 ) {
      var num = xfill(step, 3);
      file = file_path(step);

      if ( top_list.length < 4 ) {
          read_file(file, num, "banner");
      }
      step--
  }

  news_banner();
  table_header(hr_cat['img'], "", hr_cat['text'], "", hr_cat['menu'], hr_cat['status']);
  topnum = top_list[0].split("/")[4].split(".")[0]
  read_file(top_list[0], topnum, "view");
}
