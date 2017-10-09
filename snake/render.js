var WIDTH = 600;
var HEIGHT = 600;
var BOX_WIDTH = WIDTH / COLS;
var BOX_HEIGHT = HEIGHT / ROWS;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function transformX(x) {
  return WIDTH * x / COLS;
}

function transformY(y) {
  return HEIGHT * (1 - (y + 1) / ROWS);
}

function renderSnake() {
  for (var i = 0; i < snake.length; ++i) {
    var x = snake[i].x;
    var y = snake[i].y;
    var xx = transformX(x);
    var yy = transformY(y);

    if (playing) {
      context.fillStyle = 'blue';
    } else {
      context.fillStyle = 'red';
    }

    context.fillRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);

    context.strokeStyle = 'black';
    context.strokeRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);
  }
}

function renderFruit() {
  var xx = transformX(fruit.x);
  var yy = transformY(fruit.y);

  context.fillStyle = 'green';
  context.fillRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);

  context.strokeStyle = 'black';
  context.strokeRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);
}

function render() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  renderSnake();
  renderFruit();

  setTimeout(render, 15);
}

render();
