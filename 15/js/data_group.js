function data_group(text)
{

    var values = [ "title=",  "text=", "subtitle=", "file=" ] 

    function copy(i, x) {
        return text[i].split(values[x])[1];
    }

    for ( i = 0 ; i < text.length ; i++ ) {
        for ( x = 0 ; x <= 4 ; x++ ) {

            if ( text[i].startsWith(values[x])) {
                if ( x ===  0 ) { var $tit = copy(i, x); } 
                if ( x ===  1 ) { var $txt = copy(i, x); }
                if ( x ===  2 ) { var $sub = copy(i, x); }
                if ( x ===  3 ) { var $fil = copy(i, x); }

            }
        }
    }

    var fact = {};
        fact["xtit"] = $tit; 
        fact["xtxt"] = $txt; 
        fact["xsub"] = $sub;
        fact["xfil"] = $fil;

    return fact;

}
