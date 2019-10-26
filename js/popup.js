var link = document.querySelector(".form-call");
var popup = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=arrival-date]");
var form = popup.querySelector("form");
var validation = popup.querySelectorAll(".valid");
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    arrival.focus(); 
});      
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
popup.addEventListener("submit", function(evt) {
    for (var i = 0; i < validation.length; i++) {
        if (!validation[i].value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }
    }  
});