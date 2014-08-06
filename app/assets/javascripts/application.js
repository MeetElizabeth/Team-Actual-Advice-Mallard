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

  sidebarOpen();
  var openButton = $('#open-profile');
  $(openButton).hide();

  $('.page-content').on('click', '#open-profile', openProfile);
  $('.profile-sidebar').on('click', '#close-profile', closeProfile);
})


var sidebarOpen = function() {
  var mainPage = $('.page-content');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(400px)"});
}

var openProfile = function() {
  var mainPage = $(this).parent();
  var openButton = $(this);
  var closeButton = $('#close-profile');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(400px)"});
  $(openButton).hide();
  $(closeButton).show();
}

var closeProfile = function() {
  var mainPage = $('.page-content');
  var closeButton = $(this);
  var openButton = $('#open-profile');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(0px)"});
  $(closeButton).hide();
  $(openButton).show();
}
