function find_image(file_number)
{
    var dir = file_number.charAt(0);
    var subdir = file_number.charAt(1);
    var file = "./data/" + dir + "/" + subdir + "/" + file_number + ".txt";

    var rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var all_text = rawFile.responseText.split("\n");
                for ( i = 0 ; i < all_text.length ; i++ ) {
                    if ( all_text[i].startsWith("image=")) {
                         ximage = all_text[i].split("image=")[1].replace("small", "medium");
                         window.document.write(ximage);
                    }
                }
            }
        }
    }
    rawFile.send(null);

}
