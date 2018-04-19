// JavaScript Document

var acc = document.getElementsByClassName("accordion");

var V;

for (V = 0; V < acc.length; V++) {
    acc[V].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}