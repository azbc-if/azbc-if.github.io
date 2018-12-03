function countFiles() 
{

   var limit = 0;
   var file_exists = true;

   while ( file_exists === true ) {
       var img = new Image();
       img.src = "http://localhost/js-sdf/azbc/img/img_" + limit + ".jpg";
       limit++;
       file_exists = img.height != 0;
   }

   return limit - 1

}
