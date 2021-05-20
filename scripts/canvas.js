const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");
let radius = 10;
let isClicked = false;

//function to check event type and set isClicked value
const checkEventType = e => {
  if(e.type === "mousedown")
    isClicked = true;
  else if(e.type === "mouseup")
    isClicked = false;
};

//function to draw
const putPoint = e => {
  checkEventType(e);

  if(isClicked) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
};

document.addEventListener("mousedown", putPoint);
document.addEventListener("mouseup", putPoint);
document.addEventListener("mousemove", putPoint);