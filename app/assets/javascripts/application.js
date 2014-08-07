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
  // $('body').on('click', 'button', backToAllLevel);
  $('body').on('click', '#skip_hint_button', skipHint);

  showPoints(timePoints);

  moveLetters();
  countdownTimer();
  $('body').on('click', '#check-button', checkSolution);

  sidebarOpen();

  $('.page-content').on('click', '#open-profile', openProfile);
  $('.profile-sidebar').on('click', '#close-profile', closeProfile);
};

$(document).ready(readyFunc);
$(document).on('page:load', readyFunc);


function sidebarOpen() {
  var openButton = $('#open-profile');
  $(openButton).hide();
  var mainPage = $('.page-content');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(400px)"});
}

function openProfile() {
  var mainPage = $(this).parent();
  var openButton = $(this);
  var closeButton = $('#close-profile');
  $(mainPage).css('transition', 'all 0.6s');
  $(mainPage).css({"-webkit-transform":"translate(400px)"});
  $(openButton).hide();
  $(closeButton).show();
}

function closeProfile() {
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

function moveLetters() {
  $('.sortable').sortable({
    connectWith: "div"
  });
}


var gameCompleted = false;

function checkSolution() {
  var guessArea = $('.guess-area').children();
  var answer = $('.answer').attr('id');
  var guess = '';
  for (var i = 0; i < guessArea.length; i++) {
    guess += guessArea.eq(i).text();
  }
  if (guess === answer) {
    gameCompleted = true;
    var gameParams = {
      game: {
        points: 45,
        animal_id: parseInt($('.animal').attr('id')),
      }
    };
    $.ajax({
      url: '/games',
      type: 'post',
      data: gameParams
    });
  } else {
    console.log('idiot');
    alert('Try Again');
  }
}




function countdownTimer() {
  var target_time = 120;
  var time_elapsed = 0;
  var countdown = document.getElementById('countdown');
  var timer = setInterval(function () {
      seconds_left = (target_time - time_elapsed);
      if (seconds_left >= 0) {
        countdown.innerText = "Time Left: " +seconds_left;
        showPoints(seconds_left);
        if (seconds_left <= 120){
          showHints(0);
        };
        if ( seconds_left <= 90) {
          showHints(1);
        }
        if ( seconds_left <= 60) {
          showHints(2);
        }
        if ( seconds_left <= 30) {
          showHints(3);
        }
        time_elapsed += 1;
        if (gameCompleted === true) {
          clearInterval(timer);
          $('.hooray').css('display', 'block');
          showBonusAndTotalPoints ();
        }
      } else {
        clearInterval(timer);
      }
  }, 1000);
}

clickCount = 0;
function skipHint() {
  clickCount +=1;
  if (clickCount >= 0){
    showHints(0);
  }
  if (clickCount >= 1) {
    showHints(1);
  }
  if (clickCount >= 2) {
    showHints(2);
  }
  if (clickCount >= 3) {
    showHints(3);
  }
}

function showHints(index) {
  var hintsList = $('#hints').children();
  hintsList.eq(index).addClass('show');
}

timePoints = 150;
function showPoints (points) {
  $('#points').text("Points: " + points);
}

function showBonusAndTotalPoints () {
  var bonusPointsHolder = $('#bonus_points');
  var totalPointsHolder = $('#total_points');

  if (clickCount === 0) {
    bonusPointsHolder.text("Your Bonus Points: 30" );
    totalPointsHolder.append('You Earned : ' + parseInt(seconds_left + 30));
  } else if (clickCount === 1) {
    bonusPointsHolder.text("Your Bonus Points: 20" );
    totalPointsHolder.append('You Earned : ' + parseInt(seconds_left + 20));
  } else if (clickCount === 2) {
    bonusPointsHolder.text("Your Bonus Points: 10" );
    totalPointsHolder.append('You Earned : ' + parseInt(seconds_left + 10));
  } else if (clickCount === 3) {
    bonusPointsHolder.text("Your Bonus Points: 0" );
    totalPointsHolder.append('You Earned : ' + seconds_left);
  }
}
