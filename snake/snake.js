var ROWS = 50;
var COLS = 50;
var snake = [];
var SNAKE_INITIAL_LENGTH = 5;
var speed = {
  x: 1,
  y: 0
}
var GAME_SPEED = 100;

function init() {
  for (var i = 0; i < SNAKE_INITIAL_LENGTH; ++i) {
    snake.push({
      x: Math.floor(COLS / 2) - i,
      y: Math.floor(ROWS / 2)
    });
  }
}

function integrate() {
  var head = snake[0];

  var direction_x = speed.x;
  var direction_y = speed.y;

  var newPosition = {
    x: head.x + direction_x,
    y: head.y + direction_y
  };

  snake.unshift(newPosition);
  snake.pop();

  setTimeout(integrate, GAME_SPEED);
}

init();
integrate();
