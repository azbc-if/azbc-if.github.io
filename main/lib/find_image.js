function find_image(file_number)
{
    var dir = file_number.charAt(0);
    var subdir = file_number.charAt(1);
    var file = "./img/" + dir + "/" + subdir + "/" + file_number + 
               "/" + file_number + "_medium.jpg";
    var im = url_exists(file)
    if ( im === true ) {
        window.document.write(file)
    } else {
        window.document.write("<img src=\"./img/0/0/001/001_medium.jpg\" class=\"image\"></img>")
    }
}
