
// if ($(window).innerWidth() <= 728) {
$(window).scroll(function () {
  var top2 = $(document).scrollTop();
  if (top2 > 130) {
    $(".main_header").addClass('header__sticky');
  } else if (top2 < 130) {
    $(".main_header").removeClass('header__sticky');
  }
});
// }

// ========================================
jQuery(document).ready(function () {

  var giftofspeed = document.createElement('link');
  giftofspeed.rel = 'stylesheet';
  giftofspeed.href = '../css/other.css';
  giftofspeed.type = 'text/css';
  var godefer = document.getElementsByTagName('link')[0];
  godefer.parentNode.insertBefore(giftofspeed, godefer);
  
  
  AOS.init();
  
  //     // ========================================
  //     // HEADER 
  //     // --------------------
  //     // BURGER
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $('.header__burger').toggleClass('active');
    $('.header__mobile').toggleClass('active');
    $('.header__mobile > .header__mobile__content > .header_menu').toggleClass('active');
    $('.header__mobile > .header__mobile__content > .btn_orange').toggleClass('active');
    $('body').toggleClass('lock');

  });

  $('.header__mobile a').click(function () {
    $('.header__burger').toggleClass('active');
    $('.header__mobile').toggleClass('active');
    $('.header__mobile > .header__mobile__content > .header_menu').toggleClass('active');
    $('.header__mobile > .header__mobile__content > .btn_orange').toggleClass('active');
    $('body').toggleClass('lock');

  })
  // $('.btn_close__mobile').click(function (e) {
  //   e.preventDefault();
  //   $('.header__burger').removeClass('active');
  //   $('.header__mobile').removeClass('active');
  //   $('body').removeClass('lock');

  // });
  //     // $(document).mouseup(function (e) {
  //     //     var notBurger = $(".header__mobile");
  //     //     if (!notBurger.is(e.target)
  //     //         &&
  //     //         notBurger.has(e.target).length === 0) {
  //     //         $('.header__burger').toggleClass('active');
  //     //         $('.header__mobile').toggleClass('active');
  //     //         $('html, body').toggleClass('lock');
  //     //     }
  //     // });
  //     // END BURGER
  //     // --------------------
  //     // REMOVE CLASS ВНЕ БЛОКА
  //     // $(document).mouseup(function(e) {
  //     //     var div = $(".header__mobile");
  //     //     var burger = $('.h_burger2');
  //     //     if (!div.is(e.target) // если клик был не по нашему блоку
  //     //         &&
  //     //         div.has(e.target).length === 0) { // и не по его дочерним элементам
  //     //         $('.h_burger').removeClass('active');
  //     //         $('.header__mobile').removeClass('active');
  //     //         $('html, body').removeClass('lock');
  //     //         // скрываем его
  //     //     }
  //     // });
  //     //END REMOVE CLASS ВНЕ БЛОКА
  //     // --------------------
  //     // STICKY
  //     // $(window).scroll(function () {
  //     //     var topHeight = $(this).scrollTop();
  //     //     if (topHeight > 300) {
  //     //         $('.header__sticky').slideDown(200);
  //     //     } else if (topHeight <= 300) {
  //     //         $('.header__sticky').slideUp(200);
  //     //     }
  //     // });
  //     // END STICKY
  //     // --------------------
  //     // END HEADER
  //     // ========================================
  //     // MAIN
  //     // ========================================
  //     // --------------------
  // FAQ
  $(".bl_faq__content > ul > li> h4").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(".bl_faq__content > ul > li> h4").removeClass("active");
      $(this).addClass("active");

      $(".bl_faq__content > ul > li> h4").next().slideUp();
      $(this).next().slideDown();
    }
  });
  $(".bl_faq__content > ul > li").first().find('h4').click();




    
  $(".footer__h4").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(".footer__h4").removeClass("active");
      $(this).addClass("active");

      $(".footer__h4").next().slideUp();
      $(this).next().slideDown();
    }
  });

  $(".footer__h4").first().click();

  $(".mobile__menu_arrow").click(function (e) {
    e.preventDefault();
    var li = $(this).parents('.mobile__menu_li');
    if (li.hasClass('active')) {
      li.removeClass('active');
      li.find('.mobile__menu__sub').slideUp();
    } else {
      $(".mobile__menu_li").removeClass("active");
      li.addClass("active");

      $('.mobile__menu__sub').slideUp();
      li.find('.mobile__menu__sub').slideDown();
    }
  });
  
  
  


  // --------------------
  // VIDEO
  $(document).on("click", '.btn_play', function (e) {
    e.preventDefault();
    $(this).prev("video").attr('controls', '');
    $(this).prev("video").get(0).play();
    $(this).hide();
  });
  // END VIDEO
  // --------------------
  // Когда доходим до нужного блока
  var target = $('footer');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;


  if ($(window).innerWidth() < 600) {
    $(window).scroll(function () {
      var winScrollTop = $(this).scrollTop();
      if (winScrollTop > scrollToElem) {
        $('.bl_header__text .btn_orange').css('display', 'none');
      } else if (winScrollTop <= scrollToElem) {
        $('.bl_header__text .btn_orange').css('display', 'block');
      }

    });
  }
  //     // ========================================
  //     // END MAIN
  //     // ========================================
  //     // SLICK SLIDER
  //     // --------------------
  // NEWS
  $('.bl_news__content > ul').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    // cssEase: 'linear',
    arrows: true,
    // dots: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

  });
  //     // --------------------
  //     // ========================================
  
  function mainTizersInit(){
    if (first){
      $('.mini_block1').each(function(){
        $(this).append('<img src="./img/header/icon1.svg" alt="icon1"><div class="tradingview-widget-container">                           <div class="tradingview-widget-container__widget"></div>                            <!--<div class="tradingview-widget-copyright"><a                                 href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener"                                 target="_blank"><span class="blue-text">EURUSD Rates</span>                              </a> by TradingView</div>-->                            <script type="text/javascript"                               src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"                              async>                                 {                                    "symbol": "BITSTAMP:BTCUSD",                                       "width": "100%",                                          "height": "100%",                                             "locale": "en",                                                "dateRange": "12M",                                                   "colorTheme": "light",                                                      "trendLineColor": "rgba(82, 150, 150, 1)",                                                          "underLineColor": "rgba(41, 98, 255, 0)",                                                            "underLineBottomColor": "rgba(41, 98, 255, 0)",                                                               "isTransparent": false,                                                                  "autosize": true,                                                                     "largeChartUrl": ""                                 }                              </script>                        </div>'); 
      });

      $('.mini_block2').each(function(){
        $(this).append('<img src="./img/header/icon2.svg" alt="icon2"><div class="tradingview-widget-container">                           <div class="tradingview-widget-container__widget"></div>                           <!--<div class="tradingview-widget-copyright"><a                                                               href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener"                                                               target="_blank"><span class="blue-text">EURUSD Rates</span>                                                            </a> by TradingView</div>-->                           <script type="text/javascript"                              src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"                              async>                                 {                                    "symbol": "BINANCE:ETHUSDT",                                       "width": "100%",                                          "height": "100%",                                             "locale": "en",                                                "dateRange": "12M",                                                   "colorTheme": "light",                                                      "trendLineColor": "rgba(82, 150, 150, 1)",                                                         "underLineColor": "rgba(41, 98, 255, 0)",                                                            "underLineBottomColor": "rgba(41, 98, 255, 0)",                                                               "isTransparent": false,                                                                  "autosize": true,                                                                     "largeChartUrl": ""                                 }                              </script>                        </div>'); 
      });    
    }
  }

  var first = true;
  
  if ($(window).width() < 1200 && first){
    $(window).on('scroll touchmove', function(){
        if (first){
            mainTizersInit();
            first = false;              
        }
    });
  }else{
    setTimeout(function(){
      if (first){
        mainTizersInit();
        first = false;
      }
    } , 2000);
  }

    
    
  
    


  
  
  
});


/*------------------ANIM---------------------------*/

// if ($(window).innerWidth() > 1024) {


/*------------------ANIM---------------------------*/






/*------------------ANIM---------------------------*/
/*$(document).on('mouseenter', '.anim-item', function (event) {


  const $circle1 = this.querySelector('.card__circle');



  const $smallCircle1 = this.querySelector('.card__smallCircle');


  const $year1 = this.querySelector('.card__year');



  const $card1 = this.querySelector('.card');


  const $cardOrangeShine1 = this.querySelector('.card__orangeShine');

  const $cardComet1 = this.querySelector('.card__cometOuter');
  const $cardComet2 = this.querySelector('.card__cometOuter2');
  const $cardComet3 = this.querySelector('.card__cometOuter3');
  const $cardComet4 = this.querySelector('.card__cometOuter4');
  const $cardComet5 = this.querySelector('.card__cometOuter5');


  // const $circle1 = document.querySelector('.anim-item-1 .card__circle');
  // const $circle2 = document.querySelector('.anim-item-2 .card__circle');
  // const $circle3 = document.querySelector('.anim-item-3 .card__circle');
  // const $circle4 = document.querySelector('.anim-item-4 .card__circle');
  //
  //
  // const $smallCircle1 = document.querySelector('.anim-item-1 .card__smallCircle');
  // const $smallCircle2 = document.querySelector('.anim-item-2 .card__smallCircle');
  // const $smallCircle3 = document.querySelector('.anim-item-3 .card__smallCircle');
  // const $smallCircle4 = document.querySelector('.anim-item-4 .card__smallCircle');
  //
  //
  //
  // const $year1 = document.querySelector('.anim-item-1 .card__year');
  // const $year2 = document.querySelector('.anim-item-2 .card__year');
  // const $year3 = document.querySelector('.anim-item-3 .card__year');
  // const $year4 = document.querySelector('.anim-item-4 .card__year');
  //
  //
  // const $card1 = document.querySelector('.anim-item-1 .card');
  // const $card2 = document.querySelector('.anim-item-2 .card');
  // const $card3 = document.querySelector('.anim-item-3 .card');
  // const $card4 = document.querySelector('.anim-item-4 .card');
  //
  //
  // const $cardOrangeShine1 = document.querySelector('.anim-item-1 .card__orangeShine');
  // const $cardOrangeShine2 = document.querySelector('.anim-item-2 .card__orangeShine');
  // const $cardOrangeShine3 = document.querySelector('.anim-item-3 .card__orangeShine');
  // const $cardOrangeShine4 = document.querySelector('.anim-item-4 .card__orangeShine');
  //
  //
  //
  // const $cardComet1 = document.querySelector('.anim-item-1 .card__cometOuter');
  // const $cardComet2 = document.querySelector('.anim-item-2 .card__cometOuter');
  // const $cardComet3 = document.querySelector('.anim-item-3 .card__cometOuter');
  // const $cardComet4 = document.querySelector('.anim-item-4 .card__cometOuter');

  const generateTranslate = (el, e, value) => {
    console.log(e)

    el.style.transform = `translate(${e.clientX * value}px, ${e.clientY * value}px)`;
  }
  const cumulativeOffset = (element) => {
    var top = 0, left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);

    return {
      top: top,
      left: left
    };
  };



  document.onmousemove = (event) => {



    const e = event || window.event;
    const x1 = (e.pageX - cumulativeOffset($card1).left - (350 / 2)) * -1 / 100;
    // const x2 = (e.pageX - cumulativeOffset($card2).left - (350 / 2)) * -1 / 100;
    // const x3 = (e.pageX - cumulativeOffset($card3).left - (350 / 2)) * -1 / 100;
    // const x4 = (e.pageX - cumulativeOffset($card4).left - (350 / 2)) * -1 / 100;

    const y1 = (e.pageY - cumulativeOffset($card1).top - (350 / 2)) * -1 / 100;
    // const y2 = (e.pageY - cumulativeOffset($card2).top - (350 / 2)) * -1 / 100;
    // const y3 = (e.pageY - cumulativeOffset($card3).top - (350 / 2)) * -1 / 100;
    // const y4 = (e.pageY - cumulativeOffset($card4).top - (350 / 2)) * -1 / 100;

    const matrix1 = [
      [1, 0, 0, -x1 * 0.00005],
      [0, 1, 0, -y1 * 0.00005],
      [0, 0, 1, 1],
      [0, 0, 0, 1]
    ];

    // const matrix2 = [
    //   [1, 0, 0, -x2 * 0.00005],
    //   [0, 1, 0, -y2 * 0.00005],
    //   [0, 0, 1, 1],
    //   [0, 0, 0, 1]
    // ];
    //
    // const matrix3 = [
    //   [1, 0, 0, -x3 * 0.00005],
    //   [0, 1, 0, -y3 * 0.00005],
    //   [0, 0, 1, 1],
    //   [0, 0, 0, 1]
    // ];
    //
    // const matrix4 = [
    //   [1, 0, 0, -x4 * 0.00005],
    //   [0, 1, 0, -y4 * 0.00005],
    //   [0, 0, 1, 1],
    //   [0, 0, 0, 1]
    // ];
    generateTranslate($circle1, e, 0.05);
    // generateTranslate($circle2, e, 0.05);
    // generateTranslate($circle3, e, 0.05);
    // generateTranslate($circle4, e, 0.05);



    generateTranslate($smallCircle1, e, 0.03);
    // generateTranslate($smallCircle2, e, 0.03);
    // generateTranslate($smallCircle3, e, 0.03);
    // generateTranslate($smallCircle4, e, 0.03);


    generateTranslate($year1, e, 0.03);
    // generateTranslate($year2, e, 0.03);
    // generateTranslate($year3, e, 0.03);
    // generateTranslate($year4, e, 0.03);


    generateTranslate($cardOrangeShine1, e, 0.09);
    // generateTranslate($cardOrangeShine2, e, 0.09);
    // generateTranslate($cardOrangeShine3, e, 0.09);
    // generateTranslate($cardOrangeShine4, e, 0.09);

    generateTranslate($cardComet1, e, 0.05);
    generateTranslate($cardComet2, e, 0.05);
    generateTranslate($cardComet3, e, 0.05);
    generateTranslate($cardComet4, e, 0.05);
    generateTranslate($cardComet5, e, 0.05);
    // generateTranslate($cardComet2, e, 0.05);
    // generateTranslate($cardComet3, e, 0.05);
    // generateTranslate($cardComet4, e, 0.05);

    $card1.style.transform = `matrix3d(${matrix1.toString()})`;
    // $card2.style.transform = `matrix3d(${matrix2.toString()})`;
    // $card3.style.transform = `matrix3d(${matrix3.toString()})`;
    // $card4.style.transform = `matrix3d(${matrix4.toString()})`;
  }
});

$(document).on('mouseover', '.anim-item', function (e) {
  $(this).addClass('is-active');
  setTimeout(function () {
    $('.anim-item').removeClass('is-active');
  }, 200);
});
$(document).on('mouseleave', '.anim-item', function (event) {

});*/

/*-----------------END-ANIM---------------------------*/

