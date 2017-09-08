// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");
var header = document.querySelector(".willow-page-header");
var open = document.querySelector(".willow-page-header__content-open");
var close = document.querySelector(".willow-page-header__content-close");

open.addEventListener("click", function(e) {
    header.setAttribute("data-content-open", "true");    
});
close.addEventListener("click", function(e) {
    header.setAttribute("data-content-open", "false");
});