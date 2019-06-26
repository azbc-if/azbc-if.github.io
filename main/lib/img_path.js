function img_path_small(num) {

    var number = xfill(num, 3);
    var dir = number.charAt(0);
    var subdir = number.charAt(1);
    var img_path = "./img/" + dir + "/" + subdir + "/" + number + "/" + number + "_small.jpg";

    return img_path
}

function img_path_medium(num) {
    var number = xfill(num, 3);
    var dir = number.charAt(0);
    var subdir = number.charAt(1);
    var img_path = "./img/" + dir + "/" + subdir + "/" + number + "/" + number + "_medium.jpg";

    return img_path
}
