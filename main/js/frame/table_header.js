function table_header(a, b, c, d, e, f) {

    header_item = { "1": a, "2": b, "3": c, "4": d, "5": e, "6": f}
    header_class = {"1": "th_a", "2": "th_b", "3": "th_c", "4": "th_d", "5": "th_e", "6": "th_f"}
    var container, table, tr, th, next, num

    container = document.createElement("small");
    table = document.createElement("table");
    table.className = "table_header";
    tr = document.createElement("tr");

    num = 1;
    for (next in header_item) {
        th = document.createElement("th");
        th.textContent = header_item[next];
        th.className = header_class[num]; 
        tr.appendChild(th);
        num = (num+1)
    }

    table.appendChild(tr);
    container.appendChild(table);
    document.body.appendChild(container);
}

