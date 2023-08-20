"Use strict";
/*jshint esversion: 8*/

// Toggle Navigation
const navButton = document.querySelector("button[aria-expanded]");
function toggleNav() {
  const expanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", !expanded);
}
navButton.addEventListener("click", toggleNav);

// Close Navigation
window.onresize = closeNavigation;
window.onscroll = closeNavigation;
function closeNavigation() {
  navButton.setAttribute("aria-expanded", false);
}
