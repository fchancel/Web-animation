const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const lstColor = ["#f1c40f", "#3498db", "#44bd32", "#9b59b6", "#e74c3c"];
const body = document.querySelector("body");
const createCube = (color) => {
  const div = document.createElement("div");
  div.className = "cube";
  div.style.cssText = `position: absolute;
    top: ${randomInt(Math.floor(window.innerHeight / 3), window.innerHeight)}px;
    left: ${randomInt(0, window.innerWidth)}px;
    background-color: ${color};
    z-index: ${randomInt(1, 2)};
    `;
  body.append(div);
  return div;
};

setInterval(() => {
  const div = createCube(lstColor[randomInt(0, 4)]);
  setTimeout(() => div.remove(), 8000);
}, 300);
