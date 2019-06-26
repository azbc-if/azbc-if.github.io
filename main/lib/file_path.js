function file_path(num)
{
    var file = xfill(num, 3);
    var dir = file.charAt(0);
    var subdir = file.charAt(1);
    var file = "./data/" + dir + "/" + subdir + "/" + file + ".txt";

    return file
}

function file_path_md(num)
{
    var file = xfill(num, 3);
    var dir = file.charAt(0);
    var subdir = file.charAt(1);
    var file = "./data/" + dir + "/" + subdir + "/" + file + ".md";

    return file
}
