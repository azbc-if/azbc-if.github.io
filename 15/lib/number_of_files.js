function number_of_files()
{
    number = window.location.pathname.split("/").slice(-2)[0];
    return number;
}


