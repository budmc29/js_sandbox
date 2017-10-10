document.onkeydown = function(e) {
  var keys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  var direction_x = 0;
  var direction_y = 0;

  switch(keys[e.keyCode]) {
    case 'left':
      direction_x = -1;
      break;
    case 'up':
      direction_y = 1;
      break;
    case 'right':
      direction_x = 1;
      break;
    case 'down':
      direction_y = -1;
      break;
    default:
      return;
  }

  if (direction_x * speed.x != 0
    || direction_y * speed.y != 0) {
    return;
  }

  newSpeed = {
    x: direction_x,
    y: direction_y
  }
};
