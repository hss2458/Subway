var header = document.getElementsByClassName('header');
var gnb = document.getElementsByClassName('gnb');
var dropdown = document.querySelectorAll('.dropdown');

console.log(dropdown);

gnb[0].addEventListener("mouseover", function() {
    
    dropdown.forEach(function(element, i) {

        // element.classList.add('drop');
        element.style.opacity ="1";
        element.style.top = "51px";
        element.style.transition = "0.2s";

    });

});

gnb[0].addEventListener("mouseout", function() {

    dropdown.forEach(function(element, i) {
        element.style.opacity ="0";
        element.style.top = "-10px";
        element.style.transition = "0.2s";
    });

});