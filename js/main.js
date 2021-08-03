$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.navbar-ul').toggleClass('open-menu');
    });
});




  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  let nav = document.querySelector(".nav")
  if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      nav.classList.toggle("is-active")
      }, false);
  });
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    let hamburger = $(".hamburger-inner")
    hamburger.toggleClass('hamburger-white', $(this).scrollTop() > $nav.height())
  });
});

var filter_select_el = document.querySelector('.change-doctors');
var items_el = document.querySelector('.doctors-block');
var filter_btn = filter_select_el.querySelectorAll('button');



filter_btn.forEach( (item) => {
  item.addEventListener('click', () => {
    console.log(item.className);
    var items = items_el.getElementsByClassName('item');
    for (var i=0; i<items.length; i++) {
      if (items[i].classList.contains(item.className)) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  })
})