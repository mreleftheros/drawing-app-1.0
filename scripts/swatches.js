const swatchesDiv = document.getElementById("swatches");

const chooseColor = e => {
  //grab the color from the swatch
  const color = e.target.style.backgroundColor;
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
}

const createSwatch = color => {
  //create swatch
  const swatchElement = document.createElement("div");
  swatchElement.classList.add("swatch");
  swatchElement.style.background = color;

  //append swatch
  swatchesDiv.appendChild(swatchElement);
};

const createPalette = () => {
  const colorsArray = ["red", "green", "blue"];

  //create swatch for each color
  colorsArray.forEach(color => createSwatch(color));
};

window.addEventListener("load", createPalette);
swatchesDiv.addEventListener("click", chooseColor);