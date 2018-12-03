function query(string)
{

  var url_string = window.location.href
  var url = new URL(url_string);
  var parameter = url.searchParams.get(string);

  return parameter
}
