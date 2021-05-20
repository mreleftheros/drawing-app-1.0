const brushSize = document.getElementById("brushSize");

//function to change the size of brush
const changeBrushSize = e => {
  radius = e.target.value;
  ctx.lineWidth = 2 * radius;
};

brushSize.addEventListener("input", changeBrushSize);