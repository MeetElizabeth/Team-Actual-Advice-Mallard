// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// going to have to be moved to games/show.js maybe?
$(function() {
  console.log('howdy');
  $('.letter').draggable({ cursor: "move", snap: $('.blank-space') });
  $('.blank-space').droppable();
  $('.letter').mousedown(function(){
    $('.letter').css('cursor', 'grabbing');
  });

  // $('.level').getContext("2d").beginPath().arc(95,50,40,0,2*Math.PI).stroke();

})

