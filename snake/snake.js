var ROWS = 50;
var COLS = 50;
var snake = [];
var SNAKE_INITIAL_LENGTH = 5;
var speed = {
  x: 1,
  y: 0
}
var GAME_SPEED = 100;
var playing = true;
var fruit;

function newFruit() {
  do {
    fruit = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS)
    };
  } while (onSnake(fruit));
}

function init() {
  for (var i = 0; i < SNAKE_INITIAL_LENGTH; ++i) {
    snake.push({
      x: Math.floor(COLS / 2) - i,
      y: Math.floor(ROWS / 2)
    });
  }

  newFruit();
}

function lose() {
  playing = false;
}

function inBoard(position) {
  return position.x >= 0
    && position.y >= 0
    && position.x < COLS
    && position.y < ROWS;
}

function onSnake(position) {
  for (var i = 0; i < snake.length; ++i) {
    if (position.x == snake[i].x
      && position.y == snake[i].y) {
      return true;
    }
  }

  return false;
}

function integrate() {
  var head = snake[0];

  var direction_x = speed.x;
  var direction_y = speed.y;

  var newPosition = {
    x: head.x + direction_x,
    y: head.y + direction_y
  };

  if (!inBoard(newPosition)) {
    lose();
    return;
  }

  if (playing) {
    snake.unshift(newPosition);

    if (newPosition.x == fruit.x
      && newPosition.y == fruit.y) {
      newFruit();
    } else {
      snake.pop();
    }
  }

  setTimeout(integrate, GAME_SPEED);
}

init();
integrate();
