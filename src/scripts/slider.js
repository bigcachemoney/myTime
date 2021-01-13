const { data } = require("autoprefixer");

export const slideValue = document.querySelector("span");
export const inputSlider = document.getElementById("myRange");
export const inputSliderValue = document.getElementById("myRange").value;
export const slider = document.querySelector("input[type='range']");

// const inputSlider = document.getElementsByClassName("question");
  debugger;

inputSlider.oninput = (() => {
  debugger;
  // dataArray = [];
  // dataArray.push(inputSlider.value);
  console.log(inputSlider);
  console.log(inputSlider.value);
  slideValue.textContent = value;
  // slideValue.style.left = (value/2) + "%";
  slideValue.style.left = value*4 + "%";
  // slideValue.classList.add("show");
});
  debugger;

// inputSlider.onblur = (() => {
//   slideValue.classList.remove("show");
// });


// NEED EVENT LISTENER TO GET UPDATE INPUT SLIDER VALUE
// data set array has to be removed and readded, 
// there's no direct update for chartJs

// inputSlider.addEventListener('input', updateData() {
//   myRange.value = input.value;
//   console.log(input.value);
// });
inputSlider.addEventListener('input', e => {
  console.log(e);
});