function data_variables(num, text)
{
    var label = [
        "sort=",  "title=",   "text=",     "tags=",    "date=", 
        "group=", "comment=", "siblings=", "sisters=", "link=" ] 

    function data(i, x) {
        return text[i].split(label[x])[1];
    }

    for ( i = 0 ; i < text.length ; i++ ) {
        for ( x = 0 ; x <= 9 ; x++ ) {

            if ( text[i].startsWith(label[x])) {
                if ( x ===  0 ) { var xxsort     = data(i, x); } 
                if ( x ===  1 ) { var xxtitle    = data(i, x); }
                if ( x ===  2 ) { var xxtext     = data(i, x); }
                if ( x ===  3 ) { var xxtags     = data(i, x); }
                if ( x ===  4 ) { var xxdate     = data(i, x); }
                if ( x ===  5 ) { var xxgroup    = data(i, x); }
                if ( x ===  6 ) { var xxcomment  = data(i, x); }
                if ( x ===  7 ) { var xxsiblings = data(i, x); }
                if ( x ===  8 ) { var xxsisters  = data(i, x); }
                if ( x ===  9 ) { var xxlink     = data(i, x); }
            }
        }
    }

    var data = {};
        data["xsymbol"]   = xxsort //symbol[xxsort]//xxsymbol; 
        data["xsort"]     = xxsort;
        data["xtitle"]    = xxtitle; 
        data["xtext"]     = xxtext;
        data["xtags"]     = xxtags; 
        data["xfile"]     = num;
        data["xdate"]     = xxdate;
        data["xgroup"]    = xxgroup;
        if ((query("route") === "post" || query("route") === "page") && 
            xxcomment.trim() === "true") { 
                data["xcomment"] = read_md(num) 
        } else { data["xcomment"] = xxcomment }
        data["xsiblings"] = xxsiblings;
        data["xsisters"]  = xxsisters;
        data["xlink"]     = xxlink;

    return data;

}
