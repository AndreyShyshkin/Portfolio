var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    lastX = e.clientX - canvas.offsetLeft;
    lastY = e.clientY - canvas.offsetTop;
}

function draw(e) {
    if (!isDrawing) return;

    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#ffa500";
    ctx.lineWidth = 3;
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function stopDrawing() {
    isDrawing = false;
}

$(function() {
  $(".draggable").draggable();
});


function typeWriter(textElement, delay, isForward = true, repeatCount = Infinity) {
  const text = textElement.innerHTML;
  let i = isForward ? 0 : text.length;
  textElement.innerHTML = "";

  function forward() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(forward, delay);
    } else {
      setTimeout(reverse, delay);
    }
  }

  function reverse() {
    if (i >= 0) {
      textElement.innerHTML = text.substring(0, i);
      i--;
      setTimeout(reverse, delay);
    } else {
      repeatCount--;
      if (repeatCount === 0) return;
      setTimeout(forward, delay);
    }
  }

  forward();
}

const textElement = document.getElementById("name");
typeWriter(textElement, 100);
