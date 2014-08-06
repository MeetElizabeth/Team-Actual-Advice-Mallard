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

  $('body').on('click', '.level', showGames);
  gamePlay();
  countdownTimer();
  $('body').on('click', '#check-button', checkSolution);

})

function showGames(){
	var level = $(this);

	var environment = level.closest('.environment');
	var gameList = $('<article class="game_list">');
	
	var game1 = $('<div class="octagon">').append($("<span>").text("Game: 1"));
	var game2 =	$('<div class="octagon">').append($("<span>").text("Game: 2"));
	var game3 =	$('<div class="octagon">').append($("<span>").text("Game: 3"));

//add more function to count the level
	// var currentLevel = $('<h4>').text('You are on level: ')

	level.parent().remove();
	gameList.append(game1).append(game2).append(game3);

	environment.append(gameList);
}

function gamePlay() {
  var numLetters = $('.letter-bank').children().length;
  var numSpaces = $('.guess-area').children().length;
  var draggedLetter;
  for (var i = 0; i < numLetters; i++) {
    $('#letter-'+(i+1)+'').draggable({
      cursor: 'move',
      revert: true
    })
  }
  for (var b = 0; b < numSpaces; b++) {
    $('#space-'+(b+1)+'').droppable({
      accept: '.letter',
      tolerance: 'fit',
      drop: function (event, ui) {
        var draggedLetter = ui.draggable.text();
        $(this).replaceWith(ui.draggable)
      }
    });
  }
}

function checkSolution() {
  var guessArea = $('.guess-area').children();
  var answer = $('.answer').attr('id');
  var guess = '';
  for (var i = 0; i < guessArea.length; i++) {
    guess += guessArea.eq(i).text();
  };
  if (guess === answer) {
    alert('You did it!');

  } else {
    console.log('idiot');
    alert('Try Again');
  }
}

function countdownTimer() {
  var target_time = 30;
  var time_elapsed = 0;
  var countdown = document.getElementById('countdown');
  var timer = setInterval(function () {
      var seconds_left = (target_time - time_elapsed);
      if (seconds_left >= 0) {
        countdown.innerText = seconds_left;
        time_elapsed += 1;
      } else {
        clearInterval(timer);
        alert('game over.');
      }
  }, 1000);
}
