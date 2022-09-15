// hex color
//#f12302 - e.g.

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function () {
  let hexColor = "#";

   // need to run a loop for 6 times since hex color has 6 values after #

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
