"use strict";

document.getElementById("navbar_menu").onclick = function () {
    this.classList.toggle("navbar_menu_opened");

}
const elems = document.getElementsByClassName("navbar_button")
for (const elem of elems) {
    elem.onclick = function () {
        elem.classList.toggle("navbar_button_active");
    };
}