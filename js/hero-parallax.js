$(function(){

  var $heroSection = $(".hero-section"),
      $speedUpBtn = $heroSection.find(".js-speed-up");

  $heroSection.parallax({
    imageSrc: 'img/hero_bg.png',
    speed: 0.1
  });

  $speedUpBtn.on("click", function(){
    $heroSection.parallax({
      speed: 0.8
    });

  });

});
