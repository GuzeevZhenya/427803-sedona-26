document.addEventListener('DOMContentLoaded', function(){
    var link = document.querySelector(".form-call");
    var popup = document.querySelector(".search-form");
    popup.classList.toggle("form-script");
    var arrival = popup.querySelector("#arrival-date");
    var form = popup.querySelector("form");
    var validation = popup.querySelectorAll(".valid");
    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.toggle("modal-show");
        setTimeout(function(){
            arrival.focus(); 
        }, 300);
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
});