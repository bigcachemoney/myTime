const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
// const inputSlider = document.getElementsByClassName("question");

inputSlider.oninput = (() => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  // slideValue.style.left = (value/2) + "%";
  slideValue.style.left = value*4 + "%";
  slideValue.classList.add("show");
});

inputSlider.onblur = (() => {
  slideValue.classList.remove("show");
});
