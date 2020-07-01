$(document).ready(function(){

  $(window).scroll(function(){
    var anchoVentana = $(window).width();

    if (anchoVentana > 800) {
      var scrollVentana = $(window).scrollTop();

      $("header .textos").css({
          "transform": "translate(0px," + scrollVentana /4  + "%)"
      });

      $(".acerca-de article").css({
          "transform": "translate(0px, -" + scrollVentana /6  + "%)"
      });
    }

  });
  $(window).resize(function(){
    var anchoVentana = $(window).width();

    if (anchoVentana < 800) {

      $("header .textos").css({
          "transform": "translate(0px, 0px)"
      });
      $(".acerca-de article").css({
          "transform": "translate(0px, 0px)"
      });
    }
  });
});
