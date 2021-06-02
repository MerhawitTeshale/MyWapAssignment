
const WIDTH = 100;
const HEIGHT = 100;
var col = 3;
var row = 3;

$(document).ready(function(){
    
init = function () {

    var randPosx = function (num) {
        var x = ((num % 4) * 100);
        return x;
    };

    var randPosy = function (num) {
        var y = (Math.floor(num/ 4) * 100);
        return y;
    };

    $('#puzzlearea div').each(function (idx) {

        var x = randPosx(idx);
        var y = randPosy(idx);
        $(this).addClass('puzzlepiece');
        $(this).css({
            'left': x + 'px',
            'top': y + 'px',
            'backgroundImage': 'url("image/puzzle-img/background.jpg")',
            'backgroundPosition': -x + 'px ' + (-y) + 'px'
        });

        // store x and y for later
        $(this).x = x;
        $(this).y = y;

    });
};

init();

$("#shufflebutton").click(function () {
    init();
    let originalUnshuffledArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    let shuffledArray = shuffleArray(originalUnshuffledArray);
    
    $("#puzzlearea div").each(function (idx) {
      let newIdx = shuffledArray[idx];
      var xPos = function (num) {
        return (num % 4) * 100;
      };
      var yPos = function (num) {
        return Math.floor(num / 4) * 100;
      };
      var x = xPos(newIdx);
      var y = yPos(newIdx);
      var origX = xPos(idx);
      var origY = yPos(idx);
      $(this).addClass("puzzlepiece");
      $(this).css({
        'left': x + "px",
        'top': y + "px",
        'background-image': 'url(image/puzzle-img/background.jpg)',
        'background-position': -origX + 'px' + -origY + 'px',
      });
      $(this).x = x;
      $(this).y = y;
    });
    randomizeEmptyArea(shuffledArray);
  });

  $("#puzzlearea div").hover(
    function () {
      $(this).addClass("movablepiece");
    },
    function () {
      $(this).removeClass("movablepiece");
    }
  );

  $("#puzzlearea div").click(function () {
    $("#shufflebutton").off();
    var div = $(this);
    var checkMov = isMovable(div);
    if (checkMov) {
      movePiece(div);
    } else {
      alert("Sorry, can't Move");
    }
  });


var shuffleArray = function (arr) {
    let numElements = arr.length;
    let numTimesToShuffle = numElements;
    while (numTimesToShuffle != 0) {
      let randIdx1 = Math.floor(Math.random() * numElements);
      let randIdx2 = Math.floor(Math.random() * numElements);
      let tmp = arr[randIdx1];
      arr[randIdx1] = arr[randIdx2];
      arr[randIdx2] = tmp;
      numTimesToShuffle -= 1;
    }
    return arr;
  };

  var randomizeEmptyArea = function (arr) {
    let numElements = arr.length;
    let randDivIdx = Math.floor(Math.random() * numElements);
    var randDiv = $("#puzzlearea div")[randDivIdx];
   
    let randDivX = $(randDiv).position().left;
    let randDivY = $(randDiv).position().top;
    $(randDiv).css({
      top: col * HEIGHT,
      left: row * WIDTH,
    });
    row = randDivX / 100;
    col = randDivY / 100;
  };

  var isMovable = function (div) {
    var emptySquareXpos = row * WIDTH;
    var emptySquareYpos = col * HEIGHT;

    var curElemPosition = $(div).position();
    var x = curElemPosition.left;
    var y = curElemPosition.top;

    // movable position left right top bottom
    var leftPos = x + 100;
    var upTopPos = y - 100;
    var rightPos = x - 100;
    var downPos = y + 100;

    var leftPOSCHECK =
      leftPos == emptySquareXpos && y == emptySquareYpos ? true : false;
    var rightPOSCHECK =
      rightPos == emptySquareXpos && y == emptySquareYpos ? true : false;
    var topPOSCHECK =
      upTopPos == emptySquareYpos && x == emptySquareXpos ? true : false;
    var downPOSCHECK =
      downPos == emptySquareYpos && x == emptySquareXpos ? true : false;
    if (leftPOSCHECK || rightPOSCHECK || topPOSCHECK || downPOSCHECK) {
      return true;
    } else {
      return false;
    }
  };

  function movePiece(div) {
    var curElemPosition = div.position();
    var x = curElemPosition.left;
    var y = curElemPosition.top;
    
    var tempX = x / 100;
    var tempY = y / 100;
    $(div).css({
      top: col * HEIGHT,
      left: row * WIDTH,
    });
    row = tempX;
    col = tempY;
  }
});

