const btns = document.querySelectorAll(".btn");

btns.forEach((elt) => {
  elt.addEventListener("click", () => {
    if (elt.className !== "btn active") {
        const actifBtn = document.querySelector('.active');
        if (actifBtn){
            actifBtn.className = "btn";
        }
      elt.className = "btn active";
    } else {
      elt.className = "btn btn-hover";
    }
  });
  elt.addEventListener("mouseover", () => {
    if (elt.className !== "btn active") {
      elt.className = "btn btn-hover";
    }
  });
});
