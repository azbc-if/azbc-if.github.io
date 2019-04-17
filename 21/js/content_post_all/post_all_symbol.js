function post_all_symbol(xsymbol)
{
//    xdump("<code>")

    if ( xsymbol.includes(";") ) {
        xdump("<span class=\"sss\" ");
        xdump(" style=\"color:" + xsymbol.split(";")[1] + "\">");
        xdump(xsymbol.split(";")[0]);
        xdump("</span>");
    } else {
        xdump("<span class=\"sys\">");
        xdump(xsymbol);
        xdump("</span>");
    }

//    xdump("</code>")
}
