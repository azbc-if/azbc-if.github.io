function main_tag()
{
        table_header("", hr_ls['text'], "", hr_ls['img'], hr_ls['menu'], hr_ls['status']);
        list_tagged()
        tags_buttons(tags_list.length);
        status(tags_list.length);
}

