$(function(){

  var $heroSection = $(".hero-section"),
      $speedUpBtn = $heroSection.find(".js-speed-up");

  $heroSection.parallax({
    imageSrc: 'img/hero_bg.png',
    speed: 0.6
  });

  $speedUpBtn.on("click", function(){
    $heroSection.parallax({
      speed: 0.2
    });

  });

});
