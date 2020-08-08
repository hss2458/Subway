var header = document.getElementsByClassName('header');
var gnb = document.getElementsByClassName('gnb');
var ul = document.getElementsByClassName('main-ul');
var dropdown = document.querySelectorAll('.dropdown');
var content = document.getElementsByClassName('content');

gnb[0].addEventListener("mouseover", function() {
    
    dropdown.forEach(function(element, i) {

        // element.classList.add('drop');
        element.style.paddingTop = "86px";
        element.style.maxHeight = "500px";
        element.style.transition = "0.2s";
        content[1].style.bottom = "-250px";


    });

});

gnb[0].addEventListener("mouseout", function() {

    dropdown.forEach(function(element, i) {
        // element.style.top = "20px";
        element.style.paddingTop = "72px";
        element.style.maxHeight = "0";
        element.style.transition = "0.2s";
        content[1].style.bottom = "0";
    });

});


var index = 0,
    interval,
    fadeInInterval,
    fadeOutInterval;
var banner = document.getElementsByClassName('visual');
var active = document.getElementsByClassName('active')[index];
var mindex;

console.log(banner);

slide = setInterval(function() {
    next();
}, 1000);

function next() {
    banner[index].classList.remove('active'); //interval은 1초 뒤에 시작된다.
    index++;
    index = index % banner.length; // 나머지값이 순서대로 0, 1, 2
    banner[index].classList.add('active');
}

var btn = document.querySelectorAll('.btn-bar');
var banners = document.querySelectorAll('.visual');

console.log(banners);

btn.forEach(function(element, i) {
    element.addEventListener("click", function() {
        removeClass(banners, "active");
        removeClass(btn, "active");
        element.classList.add('active');
        banners[i].classList.add('active');
    });
});

function removeClass(_selector, _class) {
    _selector.forEach(function(element) {
        element.classList.remove(_class);
    });
}