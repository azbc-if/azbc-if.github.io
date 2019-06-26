function read_md(num)
{
    file = file_path_md(num)
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                xdata = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return xdata
}
