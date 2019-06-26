container = document.createElement("body");
document.html.appendChild(container);

file = document.createElement("script");
file.src = "main.js";
container.appendChild(file);

routine = document.createElement("script");
routine.innerHTML = "main();";
document.body.appendChild(routine);
