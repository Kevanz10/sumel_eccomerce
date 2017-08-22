// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require social-share-button

//= require jquery.themepunch.tools.min
//= require jquery.themepunch.revolution.min

//= require extensions/revolution.extension.actions.min
//= require extensions/revolution.extension.carousel.min
//= require extensions/revolution.extension.kenburn.min
//= require extensions/revolution.extension.layeranimation.min
//= require extensions/revolution.extension.migration.min
//= require extensions/revolution.extension.navigation.min
//= require extensions/revolution.extension.parallax.min
//= require extensions/revolution.extension.slideanims.min
//= require extensions/revolution.extension.video.min

//= require xzoom.min

//= require plugins
//= require main


$(document).ready(function($) {

  // toggle menu

  $(".photo1").mouseover(function(e){    
    $(".block-text").css("visibility", "visible");
  });
  $(".photo1").mouseout(function(e){
    $(".block-text").css("visibility", "hidden"); 
  });

  $(".photo2").mouseover(function(e){    
    $(".block-text2").css("visibility", "visible");
  });
  $(".photo2").mouseout(function(e){
    $(".block-text2").css("visibility", "hidden"); 
  });

  $(".photo3").mouseover(function(e){    
    $(".block-text3").css("visibility", "visible");
  });
  $(".photo3").mouseout(function(e){
    $(".block-text3").css("visibility", "hidden"); 
  });

  $(".sedes-bg .color1").mouseover(function(e){
    $(".one").css("visibility", "visible"); 
  });

  $(".sedes-bg .color1").mouseout(function(e){
    $(".one").css("visibility", "hidden"); 
  });

  $(".sedes-bg .color2").mouseover(function(e){
    $(".second").css("visibility", "visible"); 
  });

  $(".sedes-bg .color2").mouseout(function(e){
    $(".second").css("visibility", "hidden"); 
  });

  $(".sedes-bg .color3").mouseover(function(e){
    $(".third").css("visibility", "visible"); 
  });

  $(".sedes-bg .color3").mouseout(function(e){
    $(".third").css("visibility", "hidden"); 
  });

  $('.contact-click').click(function(event) {
    $('#busqueda-modal').modal()
  });

  $('.blue, .contact-m').click(function(event) {
    $('#busqueda-modal').modal()
  });

  $('.cotizar-click').click(function(event) {
    $('#busqueda-modal').modal()
  });

  $('.mas-button').click(function(event) {
    $('#mas-button').modal()
  });

  $('.contact-sumel').click(function(event) {
    $('#contacto-sumel-modal').modal()
  });

  $('.requerir-btn').click(function(event) {
    $('#requerir-acceso-modal').modal()
  });

  
  // Toogle session view
  $('.dos').click(function(event) {
    $('.dos-text').toggle('600');
    $('.uno-display').hide('600');
    $('.cuatro-text').hide('600');
    $('.tres-text').hide('600');
  });

  $('.uno').click(function(event) {
    $('.uno-display').toggle('600');
    $('.dos-text').hide('600');
    $('.cuatro-text').hide('600');
    $('.tres-text').hide('600');
  })

  $('.cuatro').click(function(event) {
    $('.cuatro-text').toggle('600');
    $('.uno-display').hide('600');
    $('.dos-text').hide('600');
    $('.tres-text').hide('600');
  })

  $('.tres').click(function(event) {
    $('.tres-text').toggle('600');
    $('.dos-text').hide('600');
    $('.uno-display').hide('600');
    $('.cuatro-text').hide('600');
  })  
});

(function ($) {
  $(document).ready(function($) {
    // $(function () {
    //   $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //       $(".top_panel").hide();
    //       $('.home-nav').addClass("navbar home-nav menu navbar-fixed-top fixed-margin");
    //     } else {
    //       $(".top_panel").show();
    //       $('.home-nav').removeClass('navbar-fixed-top');
    //       $('.home-nav').addClass("navbar home-nav menu navbar-static-top fixed-margin border-line");
    //     }
    //   });
    // });

    $(".photo1").mouseover(function(e){    
      $(".block-text").css("visibility", "visible");
    });
    $(".photo1").mouseout(function(e){
      $(".block-text").css("visibility", "hidden"); 
    });

    $(".photo2").mouseover(function(e){    
      $(".block-text2").css("visibility", "visible");
    });
    $(".photo2").mouseout(function(e){
      $(".block-text2").css("visibility", "hidden"); 
    });

    $(".photo3").mouseover(function(e){    
      $(".block-text3").css("visibility", "visible");
    });
    $(".photo3").mouseout(function(e){
      $(".block-text3").css("visibility", "hidden"); 
    });
  });
}(jQuery));

jQuery(document).ready(function() {
  "use strict";
  var revapi;
  if ( $("#rev_slider").revolution == undefined ) {
    revslider_showDoubleJqueryError("#rev_slider");
  } else {
    revapi = $("#rev_slider").show().revolution({
      sliderType: "standard",
      jsFileLocation: "/assets/js/",
      sliderLayout: "auto",
      dottedOverlay:"none",
      delay: 15000,
      navigation: {
        mouseScrollNavigation: "off",
        onHoverStop: "off",
        touch: {
          touchenabled: "on"
        },
        arrows: {
          style: "custom",
          enable: true,
          hide_onmobile: false,
          hide_under: 768,
          hide_onleave: false,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "bottom",
            h_offset: 63,
            v_offset: 48
          },
          right: {
            h_align: "left",
            v_align: "bottom",
            h_offset: 85,
            v_offset: 48
          }
        },
        bullets: {
          enable: false
        }
      },
      responsiveLevels: [1200,992,768,480],
      gridwidth: [870,679,640,480],
      gridheight: [468,400,360,300],
      lazyType: "smart",
      spinner: "spinner2",
      parallax: {
        type: "off"
      },
      debugMode: false
    });
  }
});
