$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.navbar-ul').toggleClass('open-menu');
    });
});




  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      }, false);
  });
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    let nav_link = $(".nav-item")
    nav_link.toggleClass('nav-white', $().scrollTop() > $nav.height())
    let hamburger = $(".hamburger-inner")
    hamburger.toggleClass('hamburger-white', $(this).scrollTop() > $nav.height())
  });
});

  

