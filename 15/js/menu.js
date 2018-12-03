function menu() {

  files = number_of_files();
  string = window.location.search

  if (string.includes("tag")) {
        xmenu_string = "menu | * | <a href=\"?file=*&range=" + files + "\">main</a>"
  } else if ( string.includes("file=*")) {
        xmenu_string = "menu | * | <a href=\"?file=*&range=" + files + "\">main</a>"
  } else if (string.includes("file")) {
        xmenu_string = "menu | * | <a href=\"?file=*&range=" + files + "\">main</a>"
  }

  xdump("<span class=\"menu\">")
  xdump(xmenu_string);
  xdump("</span>");

}
