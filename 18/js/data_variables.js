function data_variables(text)
{

    var label = [
        "symbol=", "title=",    "text=",   "tags=",
        "image=",  "file=",     "date=",   "subtitle=", "group=",
        "comment=", "haiku=",  "siblings=", "sisters=","link=" ] 

    function data(i, x) {
        return text[i].split(label[x])[1];
    }

    for ( i = 0 ; i < text.length ; i++ ) {
        for ( x = 0 ; x <= 13 ; x++ ) {

            if ( text[i].startsWith(label[x])) {
                if ( x ===  0 ) { var $symbol   = data(i, x); } 
                if ( x ===  1 ) { var $title    = data(i, x); }
                if ( x ===  2 ) { var $text     = data(i, x); }
                if ( x ===  3 ) { var $tags     = data(i, x); }
                if ( x ===  4 ) { var $image    = data(i, x); }
                if ( x ===  5 ) { var $file     = data(i, x); }
                if ( x ===  6 ) { var $date     = data(i, x); }
                if ( x ===  7 ) { var $subtitle = data(i, x); }
                if ( x ===  8 ) { var $group    = data(i, x); }
                if ( x ===  9 ) { var $comment  = data(i, x); }
                if ( x === 10 ) { var $haiku    = data(i, x); }
                if ( x === 11 ) { var $siblings = data(i, x); }
                if ( x === 12 ) { var $sisters  = data(i, x); }
                if ( x === 13 ) { var $link     = data(i, x); }
            }
        }
    }

    var data = {};
        data["xsymbol"]   = $symbol; 
        data["xtitle"]    = $title; 
        data["xtext"]     = $text;
        data["xtags"]     = $tags; 
        data["ximage"]    = $image;
        data["xfile"]     = $file;
        data["xdate"]     = $date;
        data["xsubtitle"] = $subtitle;
        data["xgroup"]    = $group;
        data["xcomment"]  = $comment;
        data["xhaiku"]    = $haiku;
        data["xsiblings"] = $siblings;
        data["xsisters"]  = $sisters;
        data["xlink"]     = $link;

    return data;

}
