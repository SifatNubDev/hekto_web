$(function(){

  //mixitup
  var containerEl = document.querySelector('.product-mix');
  var mixer = mixitup(containerEl, {
      animation: {
          duration: 1000
      }
  });



// product slider
$('.featured-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: false,
    centerPadding:0,
    responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                centerMode:false,
              }
            }
        ]
  });
  });