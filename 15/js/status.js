function status(len) {

  string = window.location.search

  if (string.includes("tag")) {
      xstatus_string = "status | * | tag: " + query("tag") + " | items: " + len
  } else if ( string.includes("file=*")) {
      xstatus_string = "status | * | main | items: " + len 
  } else if (string.includes("file")){
      xstatus_string = "status | " + query("file") + " | data"
  } else if (string.includes("image")){
      xstatus_string = "status | " + query("rel") + " | image"
  }

  xdump("<span class=\"status\">")
  xdump(xstatus_string);
  xdump("</span>");

}
