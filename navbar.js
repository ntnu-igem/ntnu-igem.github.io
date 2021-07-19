"use strict";

document.getElementById("navbar_menu").onclick = function () {
    this.classList.toggle("navbar_menu_opened");

}
const buttons = document.getElementsByClassName("navbar_button")
for (const button of buttons) {
    button.onclick = function () {
        for (const navbutt of buttons) {
            if (navbutt === button) {
                navbutt.classList.toggle("navbar_button_active");
            }
            else {
                navbutt.classList.remove("navbar_button_active");
            }
        }
    };
}