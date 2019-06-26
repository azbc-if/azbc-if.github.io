function ls_post_tags_controller(xtags)
{
    span_tags = document.createElement("span");

    if (typeof xtags === 'undefined' || xtags === "") {
    } else {
        tags_container = document.createElement("small");
        len = parseInt(xtags.split(" ").length);
        var step;

        for ( step = 0; step < len; step++ ) {
            tag = ls_tags_view(xtags, step)
            tags_container.appendChild(tag);
        }
        span_tags.appendChild(tags_container);
    }

    return span_tags
}
