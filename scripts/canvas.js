const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");
let radius = 5;
ctx.lineWidth = 2 * radius;
let isDrawing = false;

//function to check event type and set isClicked value
const checkEventType = e => {
  if(e.type === "mousedown")
    isDrawing = true;
  else if(e.type === "mouseup")
    isDrawing = false;
};

//function to draw
const putPoint = e => {
  checkEventType(e);

  if(isDrawing) {
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(e.x, e.y);
  } else {
    ctx.beginPath();
  }
};

document.addEventListener("mousedown", putPoint);
document.addEventListener("mouseup", putPoint);
document.addEventListener("mousemove", putPoint);