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

var readyFunc = function() {
  console.log('Loaded, bro.');

  showCurrentLevel();
  $('body').on('click', '.level', showGames);
  $('body').on('click', 'button', backToAllLevel);
  $('body').on('click', '#skip_hint_button', skipHint);
  gamePlay();

  countdownTimer();
  $('body').on('click', '#check-button', checkSolution);

  sidebarOpen();
  var openButton = $('#open-profile');
  $(openButton).hide();

  $('.page-content').on('click', '#open-profile', openProfile);
  $('.profile-sidebar').on('click', '#close-profile', closeProfile);

};

$(document).ready(readyFunc);
$(document).on('page:load', readyFunc);

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

var currentLevel = 1;
function showCurrentLevel (){
	$('.current_level').append(currentLevel);
}

function backToAllLevel (){
	$(this).siblings('.game_list').hide();
	$(this).siblings('.levels').show();
}

function showGames(){
	var level = $(this);

	var environment = level.closest('.environment');
	var gameList = $('<article class="game_list">');

	var game1 = $('<div class="octagon">').append($("<span>").text("Game: 1"));
	var game2 =	$('<div class="octagon">').append($("<span>").text("Game: 2"));
	var game3 =	$('<div class="octagon">').append($("<span>").text("Game: 3"));

	level.css('background', 'yellow').css('color', 'black')
	level.parent().hide();
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
        if (numSpaces === $('.guess-area').children('.letter').length) {
          setTimeout(checkSolution(), 3000);
        }
      }
    });
  }
}

var gameCompleted = false;

function checkSolution() {
  var guessArea = $('.guess-area').children();
  var answer = $('.answer').attr('id');
  var guess = '';
  for (var i = 0; i < guessArea.length; i++) {
    guess += guessArea.eq(i).text();
  };
  if (guess === answer) {
    gameCompleted = true;
    var dialog = $( "#completed-dialog" ).dialog({
         autoOpen: true,
         height: 300,
         width: 350,
         modal: true,
         buttons: {
           "Back to games": '',
           Close: function() {
             dialog.dialog( "close" );
           }
         },
       });
  } else {
    console.log('idiot');
    alert('Try Again');
  }
}

points = 150;  //points
function countdownTimer() {
  var target_time = 120;
  var time_elapsed = 0;
  var countdown = document.getElementById('countdown');
  var timer = setInterval(function () {
      var seconds_left = (target_time - time_elapsed);
      
      if (seconds_left >= 0) {
        countdown.innerText = "Time Left: " +seconds_left;

        if (seconds_left <= 120){
          $('.first_hint').css('display', 'block');
        };
        if ( seconds_left <= 90) {
          $('.second_hint').css('display', 'block');
          points -= 10;
        }
        if ( seconds_left <= 60) {
          $('.third_hint').css('display', 'block');
        }
        if ( seconds_left <= 30) {
          $('.image_hint').css('display', 'block');
        }

        time_elapsed += 1;
        if (gameCompleted === true) {
          clearInterval(timer);
          $('.hooray').css('display', 'block');
        }
      } else {
        clearInterval(timer);
      }
  }, 1000);
  
}

function restartGame() {

}

var clickCount = 0;
function skipHint() {
  clickCount +=1;
  if (clickCount >= 0){
    $('.first_hint').css('display', 'block');
  }
  if (clickCount >= 1) {
    $('.second_hint').css('display', 'block');
    points -= 10;
  }
  if (clickCount >= 2) {
    $('.third_hint').css('display', 'block');
  }
  if (clickCount >= 3) {
    $('.image_hint').css('display', 'block');
  }

}

function showPoints () {
  var pointsHolder = $('#points');  // points
  pointsHolder.append(points);
}






