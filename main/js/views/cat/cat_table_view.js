function cat_table_view()
{
    table = document.createElement("table");
    table.className = "table_single";
    main_tr = document.createElement("tr");

    td_image = cat_image_controller(data['xfile']);
    td_menu = cat_menu_controller(data['xlink'], data['xsiblings'], data['xsisters']);
    td_status = cat_status_controller(data['xfile'], data['xdate']);
    td_text = cat_glossary_controller(data['xfile'], data['xtitle'],
                       data['xtext'], data['xcomment'], data['xgroup'])
    read_others(data['xgroup'])
    dotted = document.createElement("hr");
    dotted.className = "dashed";
    td_text.appendChild(dotted);

    main_tr.appendChild(td_image);
    main_tr.appendChild(td_text);
    main_tr.appendChild(td_menu);
    main_tr.appendChild(td_status);
    table.appendChild(main_tr);
    document.body.appendChild(table);
}
