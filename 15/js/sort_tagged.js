function sort_tagged(file, all_text)
{

    data = data_variables(all_text);
    tag_current = query("tag");

    if ( data["xtags"].includes(tag_current) ) {
          tags_list.push(file)
    }

}
