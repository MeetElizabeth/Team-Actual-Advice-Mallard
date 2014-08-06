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

$(document).ready(function(){
  console.log('Loaded, bro.');

  $('.page-content').on('click', '#open-profile', openProfile);
  $('.profile-sidebar').on('click', '#close-profile', closeProfile);
  $('.environment').on('click', 'h1', showAnimals);

  $('#collected').hide();
})

var openProfile = function() {
  var mainPage = $(this).parent();
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(400px)"});
}

var closeProfile = function() {
  var mainPage = $('.page-content');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(0px)"});
}

var showAnimals = function() {
  $('#collected').show();
}