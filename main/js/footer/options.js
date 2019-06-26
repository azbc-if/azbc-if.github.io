function options()
{
    number = query("page");
    var option = {}

    option_0 = top_footer[0]
    option_1 = top_footer[1]
    option_2 = top_footer[2]

    grid_container = document.createElement("div");
    grid_container.className = "grid-container";

    three_options = document.createElement("div");
    three_options.className = "text";
    if ( option_1 === undefined && option_2 === undefined ) {
        three_options.innerHTML = "One Option";
    } else if ( option_2 === undefined ) {
        three_options.innerHTML = "Two Options";
    } else {
        three_options.innerHTML = "Three Options";
    }

    item_a = document.createElement("a");
    item_a.className = "kop1";
    item_a.href = xhref['tag'] + option_0
    item_a.innerHTML = option_0;

    item_b = document.createElement("a");
    item_b.className = "kop2";
    item_b.href = xhref['tag'] + option_1
    item_b.innerHTML = option_1;

    item_c = document.createElement("a");
    item_c.className = "kop3";
    item_c.href = xhref['tag'] + option_2
    item_c.innerHTML = option_2;

    img1_container = document.createElement("div");
    img1_container.className = "img1"

    img2_container = document.createElement("div");
    img2_container.className = "img2"

    img3_container = document.createElement("div");
    img3_container.className = "img3"

    img1 = document.createElement("img");
    img1.className = "grid_img_size";
    if ( top_footer_img[0] === undefined ) {
        img1.src = "./img_main/gray.png"
    } else {
        var img_0 = img_path_medium(top_footer_img[0])
        img1.src = img_0
    }

    img2 = document.createElement("img");
    img2.className = "grid_img_size";
    if ( top_footer_img[1] === undefined ) {
        img2.src = "./img_main/gray.png"
    } else {
        var img_1 = img_path_medium(top_footer_img[1])
        img2.src = img_1
    }

    img3 = document.createElement("img");
    img3.className = "grid_img_size";
    if ( top_footer_img[2] === undefined ) {
        img3.src = "./img_main/gray.png"
    } else {
        var img_2 = img_path_medium(top_footer_img[2])
        img3.src = img_2
    }

    grid_container.appendChild(three_options);
    grid_container.appendChild(item_a);
    if ( option_1 === undefined ) {
    } else {
        grid_container.appendChild(item_b);
    }
    if ( option_2 === undefined ) {
    } else {
        grid_container.appendChild(item_c);
    }

    img1_container.appendChild(img1);
    grid_container.appendChild(img1_container);
    img2_container.appendChild(img2);
    grid_container.appendChild(img2_container);
    img3_container.appendChild(img3);
    grid_container.appendChild(img3_container);

    if ( option_0 === undefined ) {
    } else {
        window.document.body.appendChild(grid_container);
    }
}
