function news_title(number) {

    var file = file_path(number)

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var all_text = rawFile.responseText //.replace(/\\\s+/g, " ");
                data['xtitle'] = all_text.split("title=")[1].split("\n")[0];
            }
        }
    }
    rawFile.send(null);
    return data['xtitle'];
}
