//Link Animation
$('.nav a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100,
    },
    500
  );
});
//Fim do link animation

//scroll Animation
var root = document.documentElement;
root.className += " js";

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function () {
  var $target = $(".anime"),
    animationClass = "anime-init",
    windowHeight = $(window).height(),
    offset = windowHeight - windowHeight / 3;

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function () {
    animeScroll();
  });
});
//Fim scroll Animation

//Navbar transparent
$(window).scroll(function() {
   if ($(window).scrollTop() >= 50) {
      $('.index').css('background-color', '#d5bfaa');
   } else {
      $('.index').css('background-color', 'transparent');
   }
});