const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");
let radius = 10;
let isClicked = false;

const putPoint = e => {
  
  if(isClicked) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  
};

document.addEventListener("mousedown", e => {
  console.log(e)
  isClicked = true;
  putPoint(e);
});
document.addEventListener("mouseup", e => isClicked = false);
document.addEventListener("mousemove", e => {
  if(isClicked)
    putPoint(e);
})