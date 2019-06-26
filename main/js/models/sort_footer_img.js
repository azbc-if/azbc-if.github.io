function sort_footer_img(flag)
{
    main_img = top_list[0].split("/")[4].split(".")[0]

    if (typeof data['xtags'] === 'undefined' || data['xtags'] === "") {
    } else {
        if ( data["xtags"].includes(top_footer[flag]) ) {
            if ( top_footer_img[flag] ) {
            } else {
                if ( flag === 0 ) {
                    if ( main_img === data['xfile'] ) {
                    } else {
                        top_footer_img[flag] = data['xfile'];
                    }
                } else if ( flag === 1 ) {
                    if ( data['xfile'] === top_footer_img[0] || 
                         main_img === data['xfile'] ) {
                    } else {
                        top_footer_img[flag] = data['xfile'];
                    }
                } else if ( flag === 2 ) {
                    if ( data['xfile'] === top_footer_img[0] || 
                         data['xfile'] === top_footer_img[1] ||
                         main_img === data['xfile']) {
                    } else {
                        top_footer_img[flag] = data['xfile'];
                    }
                }
            }
        }
    }
}
