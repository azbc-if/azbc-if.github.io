function read_file(file, flag)
{

    var rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var all_text = rawFile.responseText.replace(/\\\s+/g, " ");
//                var all_text = rawFile.responseText.split("\n");
                all_text = all_text.split("\n");

                route(all_text, flag)

            }
        }
    }
    rawFile.send(null);
}
