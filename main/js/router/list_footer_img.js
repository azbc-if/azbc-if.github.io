function list_footer_img() {

  for ( num = 0 ; num < 3 ; num++ ) {

      step = number_of_files()
      while ( step > -1 ) {

        if ( top_footer_img[num] ) {
        } else {
            var img_num = xfill(step, 3);
            file = file_path(img_num);

            read_file(file, img_num, num);
        }
        step--
      }
  }
}
