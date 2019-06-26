function data_group(num, text)
{

    var values = [ "title=",  "text=" ] 

    function copy(i, x) {
        return text[i].split(values[x])[1];
    }

    for ( i = 0 ; i < text.length ; i++ ) {
        for ( x = 0 ; x <= 1 ; x++ ) {

            if ( text[i].startsWith(values[x])) {
                if ( x ===  0 ) { var xxtit = copy(i, x); } 
                if ( x ===  1 ) { var xxtxt = copy(i, x); }
            }
        }
    }

    var fact = {};
        fact["xtit"] = xxtit;
        fact["xtxt"] = xxtxt;
        fact["xfil"] = num;

    return fact;

}
