function main_all()
{
        table_header("", hr_ls['text'], "", hr_ls['img'], hr_ls['menu'], hr_ls['status']);
        list_all();
        button();
        var files = number_of_files();
        status(files);
}
