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
  return HEIGHT * (1 - y / ROWS);
}

function renderSnake() {
  for (var i = 0; i < snake.length; ++i) {
    var x = snake[i].x;
    var y = snake[i].y;
    var xx = transformX(x);
    var yy = transformY(y);

    context.fillStyle = 'red';
    context.fillRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);
    context.strokeStype = 'black';
    context.strokeRect(xx, yy, BOX_WIDTH, BOX_HEIGHT);
  }
}

function render() {
  context.clearRect(0, 0, WIDTH, HEIGHT);

  renderSnake();

  setTimeout(render, 15);
}

render();
