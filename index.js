$('.header-menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header-menu-btn_active');
    $('.header-nav').toggleClass('header-nav_active',2000);
});
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 300) {
    $('.header-container').css({'padding':'0 30px'});
    $('.header-title').css({'font-size':'36px'});
  }
  else {
     $('.header-container').css({'padding':'30px'});
     $('.header-title').css({'font-size':'47.64px'});
  }
});
$(document).ready(function(){
    $('.testi-block').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});
$('.header-nav a').on('click', function(e) {
  if(this.hash != '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },800);   
  }
});