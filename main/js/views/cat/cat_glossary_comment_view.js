function cat_glossary_comment_view(xcomment)
{
    storeline = []
    newline = xcomment.split("\n");
    for (var line = 0; line < newline.length; line++) {
        if (newline[line].startsWith("----") ) {
            newline[line] = newline[line].replace("----", "<br/><br/><hr/><br/>")
        } else if ( newline[line].startsWith("---") ) {
            newline[line] = newline[line].replace("---", "<center><h3>") + "</h3></center>"
        } else if ( newline[line].startsWith("--") ) {
            newline[line] = newline[line].replace("--", "<center><h2>") + "</h2></center>"
        } else if ( newline[line].startsWith("-") ) {
            newline[line] = newline[line].replace("-", "<center><h1>") + "</h1></center>"
        } else if ( newline[line].startsWith("+") ) {
            len = newline[line].split(" ")[0].length
            chars = newline[line].split(" ")[0]
            newline[line] = newline[line].replace( chars, "<br/>".repeat(len))
        } else if ( newline[line].startsWith("*") ) {
            css = " style=\"display: block; vertical-align: top\""
            bull = "&nbsp;".repeat(8) + "&bull;&nbsp;"
            start = "<table><tr><td" + css + ">" + bull + "</td><td>"
            end = "</td></tr></table>"
            newline[line] = newline[line].replace("*", start) + end
        } else if ( newline[line].startsWith("[img=") ) {
            newline[line] = newline[line].replace('[img=', '')
            newline[line] = newline[line].replace(']', '')
            number = parseInt(newline[line]);
            image = img_path_medium(number)
            image = "<img class=\"table_image\" src=\"" + image +"\"></img>"
            newline[line] = image
        } else if ( newline[line].startsWith("[") ) {
            newline[line] = newline[line].replace('][', '">')
            newline[line] = newline[line].replace('[', 
                '<code><b>&nbsp;-&gt; </b></code><a href="?route=post&view=odd&group=ok&file=')
            newline[line] = newline[line].replace(']', '&nbsp;</a>')
        }
        newline[line] = newline[line].replace("'''", "<i>")
        newline[line] = newline[line].replace("```", "</i>")
        newline[line] = newline[line].replace("''", "<b>")
        newline[line] = newline[line].replace("``", "</b>")
        newline[line] = newline[line] + " "

        storeline.push(newline[line]);
    }

    xcomment = storeline.join("")

    cat_glossary_comment_view_container = document.createElement("div");

    cat_glossary_comment_view_title = document.createElement("span");
    cat_glossary_comment_view_title.className = "shp border";
    cat_glossary_comment_view_title.innerHTML = cat['main']; // "arch"

    cat_glossary_comment_view_body = document.createElement("div");
    cat_glossary_comment_view_body.className = "border_dotted";
    cat_glossary_comment_view_body.innerHTML = xcomment

    cat_glossary_comment_view_container.appendChild(cat_glossary_comment_view_title);
    cat_glossary_comment_view_container.appendChild(cat_glossary_comment_view_body);

    return cat_glossary_comment_view_container;

}
