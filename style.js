
const randomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min

const lstColor = [
    "#f1c40f",
    "#3498db",
    "#27ae60",
    "#9b59b6",
    "#ecf0f1",
    "#16a085",
    "#e74c3c",
];


const body = document.querySelector("body");

const btns = document.querySelectorAll(".btn");
btns.forEach(elt => {
    elt.addEventListener("click", (e)=>{
        e.stopPropagation();
        const activeElt = document.querySelector('.active');
        activeElt.className = "btn";
        elt.className = "btn active"
    })
})

const littleCircle = (posX, posY, color) => {
  const div = document.createElement("div");
  div.className = "little-circle";
  div.style.cssText = `

        top: ${posY - 30}px;
        left: ${posX - 30}px;
        background-color: ${color};
    `;
  div.animate(
    [
      { transform: `translateY(0)` },
      {
        transform: `translate(${randomInt(-300, 300)}px, ${randomInt(
          -300,
          300
        )}px)`,
      },
    ],
    {
      duration: 500,
    }
  );
  body.append(div);
  return div;
};

body.addEventListener("click", (e) => {
  const limit = document.querySelector(".active");
  for (let i = 0; i < limit.dataset.value; i++) {
    const div = littleCircle(e.clientX, e.clientY, lstColor[randomInt(0, 6)]);
    setTimeout(() => {
        div.remove();
      }, 500);
  }

});

