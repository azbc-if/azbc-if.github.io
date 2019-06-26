function number_of_files()
{
    var file
    var value = true
    var dir = 0

    while ( value ) {
        file = "./data/" + dir;
        value = url_exists(file)
        dir++
    }

    dir = dir-2
    var subdir = 0
    value = true

    while ( value ) {
        file = "./data/" + dir + "/" + subdir;
        value = url_exists(file)
        subdir++
    }

    subdir = subdir-2
    var num = 0
    value = true

    while ( value ) {
        file = "./data/" + dir + "/" + subdir + "/" + 
                dir + subdir + num + ".txt";
        value = url_exists(file)
        num++
    }

    num = num-2
    number = parseInt(String(dir) + String(subdir) + String(num))
    return number
}

