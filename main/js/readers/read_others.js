function read_others(xgroup)
{
    if (typeof xgroup === 'undefined' || xgroup === "") {
    } else {
        var len = parseInt(xgroup.split(" ").length);
        var step;
        for ( step = 0; step < len; step++ ) {

            var next = xgroup.split(" ")[step];
            var file = file_path(next)
            var num = xgroup.split(" ")[step]

            read_file(file, num, "group");
        }
    }
}
