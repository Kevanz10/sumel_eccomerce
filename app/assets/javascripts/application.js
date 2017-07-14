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
//= require turbolinks
//= require social-share-button
//= require_tree .


$(document).on('turbolinks:load', function() {
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

  $('.blue').click(function(event) {
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
  $(document).on('turbolinks:load', function() {
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $(".top_panel").hide();
          $('.home-nav').addClass("navbar home-nav menu navbar-fixed-top fixed-margin");
        } else {
          $(".top_panel").show();
          $('.home-nav').removeClass('navbar-fixed-top');
          $('.home-nav').addClass("navbar home-nav menu navbar-static-top fixed-margin border-line");
        }
      });
    });

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