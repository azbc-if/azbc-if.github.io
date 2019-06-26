function read_file(file, num, flag)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var all_text = rawFile.responseText //.replace(/\\\s+/g, " \\"); //.replace(/\\\s+/g, " ");
                all_text = all_text.split("\n");

                data = data_variables(num, all_text);
                fact = data_group(num, all_text)

                if ( flag === 0 || flag === 1 || flag === 2 ) {
                    sort_footer_img(flag);
                } else {
                    router(flag);
                }
            }
        }
    }
    rawFile.send(null);
}
