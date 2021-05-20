var canvas = document.body.appendChild(document.createElement('canvas')),
  context = canvas.getContext('2d');
context.globalCompositeOperation = 'lighter';
canvas.width = 1600;
canvas.height = 1000;
draw();

var textStrip = ['Ж', 'Й', 'Д', 'Ф', 'П', 'Ш', 'Ы', 'Ю', 'Я ', 'Э', 'Н', 'Ъ', 'К'];

var stripCount = 5,
  stripX = new Array(),
  stripY = new Array(),
  dY = new Array(),
  stripFontSize = new Array();

for (var i = 0; i < 50; i++) {
  stripX[i] = Math.floor(Math.random() * 1600);
  stripY[i] = 100;
  dY[i] = Math.floor(Math.random() * 7) + 3;
  stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
}

var theColors = ['#ff0000', '#ff4f4f', '#ff7575', '#ff9c9c', '#ffbfbf', '#ffe8e8'];

var elem, context, timer;

function drawStrip(x, y) {
  for (var k = 0; k <= 100; k++) {
    var randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
    if (context.fillText) {
      switch (k) {
        case 0:
          context.fillStyle = theColors[0];
          break;
        case 1:
          context.fillStyle = theColors[1];
          break;
        case 2:
          context.fillStyle = theColors[2];
          break;
        case 3:
          context.fillStyle = theColors[3];
          break;
        case 4:
          context.fillStyle = theColors[4];
          break;
        case 5:
          context.fillStyle = theColors[5];
      }
      context.fillText(randChar, x, y);
    }
    y -= stripFontSize[k];
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.shadowOffsetX = context.shadowOffsetY = 0;
  context.shadowBlur = 8;
  context.shadowColor = '#ffffff';

  for (var j = 0; j < stripCount; j++) {
    context.font = stripFontSize[j] + 'px MatrixCode';
    context.textBaseline = 'top';
    context.textAlign = 'center';

    if (stripY[j] > 1000) {
      stripX[j] = Math.floor(Math.random() * canvas.width);
      stripY[j] = -100;
      dY[j] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
      drawStrip(stripX[j], stripY[j]);
    } else drawStrip(stripX[j], stripY[j]);
    if (stripY[j] > 0) {
      document.getElementById("citadlo").innerHTML = "Hadů: 5";
    } else {
      document.getElementById("citadlo").innerHTML = "Hadů: 4";
    }
    stripY[j] += dY[j];
  }
  setTimeout(draw, 70);
}
