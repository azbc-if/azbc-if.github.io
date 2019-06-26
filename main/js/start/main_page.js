function main_page()
{
    list_news();

    file = file_path(query("page"))
    read_file(file, query("page"), "sort");
    status("");

    var num = top_list[0].split("/")[4].split(".")[0]
    read_file(top_list[0], num, "select")
    list_footer_img();
    options();

}
