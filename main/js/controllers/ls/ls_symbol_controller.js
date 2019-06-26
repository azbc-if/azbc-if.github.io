function ls_symbol_controller(xsymbol)
{
    td_symbol = document.createElement("td");
    td_symbol.className = "symbol_all";

    if (typeof xsymbol === 'undefined' || xsymbol === "") {
    } else {
        if ( xsymbol.includes(";") ) {
            xxsymbol = ls_sym_color_view(xsymbol);
            td_symbol.appendChild(xxsymbol);
        } else {
            xxsymbol = ls_sym_view(xsymbol);
            td_symbol.appendChild(xxsymbol);
        }
    }

    return td_symbol
}
