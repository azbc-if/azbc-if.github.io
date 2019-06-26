function ls_table_view()
{
    table = document.createElement("table");
    table.className = "main_table";
    main_tr = document.createElement("tr");

    td_symbol = ls_symbol_controller(data['xsymbol'])
    td_text = ls_post_controller(data['xtitle'], data['xcomment'], 
                                 data['xfile'], data['xtext'], data['xtags']);
    td_image = ls_image_controller(data['xfile']);
    td_menu = ls_menu_controller(data['xlink']);
    td_status = ls_status_controller(data['xdate'], data['xfile']);

    main_tr.appendChild(td_symbol);
    main_tr.appendChild(td_text);
    main_tr.appendChild(td_image);
    main_tr.appendChild(td_menu);
    main_tr.appendChild(td_status);

    table.appendChild(main_tr);

    document.body.appendChild(table);

}
