function post_group()
{
    last_other = document.createElement("div");

    if (typeof fact["xtit"] === 'undefined' || fact["xtit"] === "") {
    } else {
        last_arrow = document.createElement("span");
        last_arrow.className = "sa";
        last_arrow.innerHTML = "-&gt;&nbsp;";
        lfil = document.createElement("span");
        lfil.className = "sf";
        linkfile = document.createElement("a");
        linkfile.href = xhref['post'] + fact["xfil"];
        linkfile.innerHTML = fact["xfil"];
        lfil.appendChild(linkfile);
        last_other.appendChild(last_arrow);
        last_other.appendChild(lfil);
    }

    if (typeof fact["xtit"] === 'undefined' || fact["xtit"] === "") {
    } else {
        ot_spac = document.createElement("span");
        ot_spac.className = "sa";
        ot_spac.innerHTML = "&nbsp;&nbsp;&nbsp;";
        other_tit = document.createElement("span");
        other_tit.className = "st";
        other_tit.innerHTML = fact['xtit'];
        ot_spac.appendChild(other_tit);
        last_other.appendChild(ot_spac);
    }

    if (typeof fact["xtxt"] === 'undefined' || fact["xtxt"] === "") {
    } else {
        not_spc = document.createElement("span");
        not_spc.className = "sa";
        not_spc.innerHTML = "&nbsp;::&nbsp;";
        ther_stxt = document.createElement("span");
        ther_stxt.className = "sx";
        ther_stxt.innerHTML = fact['xtxt'];
        last_other.appendChild(not_spc);
        last_other.appendChild(ther_stxt);
    }
    td_text.appendChild(last_other);
}
