function sort_tagged()
{
    if ( data["xtags"].includes(query("tag")) ) {
          tags_list.push(file_path(data['xfile']))
    }
}
