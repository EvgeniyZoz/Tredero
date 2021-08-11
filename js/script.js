
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
  giftofspeed.href = 'css/other.css';
  giftofspeed.type = 'text/css';
  var godefer = document.getElementsByTagName('link')[0];
  godefer.parentNode.insertBefore(giftofspeed, godefer);
  
  
  $('#phone').each(function(){
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
      // separateDialCode: true,
      //utilsScript: "build/js/utils.js",
    });
  });
  
  AOS.init();
  
  $("video").prop("volume", 0.3).click(function(){this[this.paused?"play":"pause"]()});

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

  $(".mobile__menu_clickable, .mobile__menu_clickable a").click(function (e) {
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
        $(this).append('<img src="./img/new/card1__group1.svg" alt="icon1"><div class="tradingview-widget-container">                           <div class="tradingview-widget-container__widget"></div>                            <!--<div class="tradingview-widget-copyright"><a                                 href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener"                                 target="_blank"><span class="blue-text">EURUSD Rates</span>                              </a> by TradingView</div>-->                            <script type="text/javascript"                               src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"                              async>                                 {                                    "symbol": "BITSTAMP:BTCUSD",                                       "width": "100%",                                          "height": "100%",                                             "locale": "en",                                                "dateRange": "12M",                                                   "colorTheme": "light",                                                      "trendLineColor": "rgba(82, 150, 150, 1)",                                                          "underLineColor": "rgba(41, 98, 255, 0)",                                                            "underLineBottomColor": "rgba(41, 98, 255, 0)",                                                               "isTransparent": false,                                                                  "autosize": true,                                                                     "largeChartUrl": ""                                 }                              </script>                        </div>'); 
      });

      $('.mini_block2').each(function(){
        $(this).append('<img src="./img/new/card1__group4.svg" alt="icon2"><div class="tradingview-widget-container">                           <div class="tradingview-widget-container__widget"></div>                           <!--<div class="tradingview-widget-copyright"><a                                                               href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener"                                                               target="_blank"><span class="blue-text">EURUSD Rates</span>                                                            </a> by TradingView</div>-->                           <script type="text/javascript"                              src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"                              async>                                 {                                    "symbol": "BINANCE:ETHUSDT",                                       "width": "100%",                                          "height": "100%",                                             "locale": "en",                                                "dateRange": "12M",                                                   "colorTheme": "light",                                                      "trendLineColor": "rgba(82, 150, 150, 1)",                                                         "underLineColor": "rgba(41, 98, 255, 0)",                                                            "underLineBottomColor": "rgba(41, 98, 255, 0)",                                                               "isTransparent": false,                                                                  "autosize": true,                                                                     "largeChartUrl": ""                                 }                              </script>                        </div>'); 
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

  $('.input__ranged').each(function(){
    $(this).inputNumber({
      negative:false, //allow negative numbers
      positive:true, //allow positive numbers
      wrapClass:'ranged__input',
      upClass:'up',
      upTitle:'Incrase',
      downClass:'down',
      downTitle:'Decrace'
    });
  });
  

  $('.blogSwiper').each(function(){
  	var swiper1 = new Swiper(".blogSwiper", {
	    lazy: true,
	     slidesPerView: 1,
	    spaceBetween: 30,
	    //autoHeight: true,
	    navigation: {
	      nextEl: ".blog__next",
	      prevEl: ".blog__prev",
	    },
	    breakpoints: {
	      220:{
	        slidesPerView: 1,
	        slidesPerColumn:3,        
	        Autoheight:true
	      },
	      640: {
	        slidesPerView: 2,
	        slidesPerColumn:2,
	      },
	      1198: {
	        slidesPerView: 3,
	      },
	      1799: {
	        slidesPerView: 4
	      },
	    }
	  });
  });
  
  
  /*tabs*/
  $('.tabs li.active a').each(function(){
    var tabId = $(this).attr('href')+'_';
    $(tabId).addClass("activated");
  })

  $('.tabs li').click(function(e){
    var menuActive = $(this).find('a').attr('href')+'_';
    menuActive = menuActive.substr(menuActive.indexOf('#'));
    $(this).parents('.tabs__wrapper').find('.tabs__box').removeClass('activated')
    $(this).parents('.tabs__wrapper').find('.tabs li').removeClass('active');
    $(this).addClass('active');
    $(menuActive).addClass('activated')
    if (!$(this).parents('.tabs').hasClass('tabs__links')){
        e.preventDefault();
    }
  }) 

  
});



/*-----------------END-ANIM---------------------------*/

$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 430,
      value:10,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
        $( "#amount2" ).html($( "#amount" ).val()*80)
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
    $( "#amount2" ).html($( "#amount" ).val()*80)
} );