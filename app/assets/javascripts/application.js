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

  $('body').on('click', '.level', showGames);

})

function showGames(){
	var level = $(this);

	var environmentName = level.closest('.environment');
	var gameList = $('<article class="game_list">');
	
	var game1 = $('<div class="octagon">').append($("<span>").text("Game: 1"));
	var game2 =	$('<div class="octagon">').append($("<span>").text("Game: 2"));
	var game3 =	$('<div class="octagon">').append($("<span>").text("Game: 3"));

	level.parent().remove();
	gameList.append(game1).append(game2).append(game3);
	environmentName.append(gameList);
}