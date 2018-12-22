function route(all_text, flag)
{

    if ( flag === "all" ) {
        post_all(all_text);
    } else if ( flag === "tagged" ) {
        post_all(all_text);
    } else if ( flag === "single" ) {
        post_single(all_text);
    } else if ( flag === "group" ) {
        post_group(all_text);
    } else {
        sort_tagged(flag, all_text);        
    }

}
