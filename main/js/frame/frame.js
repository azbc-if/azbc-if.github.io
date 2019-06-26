function frame() {
    top_frame = document.createElement("div");
    top_frame.className = "top_frame";

    bottom_frame = document.createElement("div");
    bottom_frame.className = "bottom_frame";

    window.document.body.appendChild(top_frame);
    window.document.body.appendChild(bottom_frame);
}
