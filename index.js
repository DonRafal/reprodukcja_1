import "./style.css";

const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelectorAll(".fake-canvas .pixel");
const originalCanvas = document.querySelectorAll(".original-canvas .pixel");

let arr = [];
let i = 0;

originalCanvas.forEach((e, index) => {
  if (e.classList.item(1) == "pixel-dot") {
    arr.push(index);
  }
});

fakeCanvas.forEach((e, index) => {
  if (index == arr[i]) {
    e.classList.add("pixel-dot");
    i++;
  }
});
