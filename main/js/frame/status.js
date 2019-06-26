function status(len) {
  string = window.location.search

  if (string.includes("tag")) {
      xstatus_string = status['name'] + " | * | tag: " + query("tag") + " | items: " + len
  } else if ( string.includes("file=*")) {
      xstatus_string = status['name'] + " | * | main | items: " +  (Number(len)+1)
  } else if (string.includes("file")){
      xstatus_string = status['name'] + " | " + query("file") + " | data"
  } else if (string.includes("image")){
      xstatus_string = status['name'] + " | " + query("rel") + " | image"
  } else if (string.includes("page")){
      xstatus_string = status['name'] + " | " + query("page") + " | item"
  }

    status_bar = document.createElement("span");
    status_bar.className = "status";
    status_bar.innerHTML = xstatus_string;
    document.body.appendChild(status_bar);
}
