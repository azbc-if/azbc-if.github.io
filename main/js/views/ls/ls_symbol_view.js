function ls_sym_color_view(xsymbol) 
{
    symb = document.createElement("a");
    symb.className = "sss";
    symb.href = xhref['page'] + data['xsort']
    symb.style = "color: " + xsymbol.split(";")[1];
    symb.innerHTML = data['xsymbol'].split(";")[0];

    return symb
}

function ls_sym_view(xsymbol)
{
    symb = document.createElement("a")
    symb.className = "sys";
    symb.href = xhref['page'] + data['xsort']
    symb.innerHTML = data['xsymbol'];

    return symb
}
