var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*
 * The link where I got this code snippet is listed in the credits section of the site. This code takes all
 * of my elements with the class name "accordion", and creates a function where if one of them is clicked, it will
 * use the maxHeight function to open and close the accordion items. If the panel has a max height, it is nullified.
 * If there is no max height, the panel is assigned "scrollHeight", which is the height of the content.
 */
