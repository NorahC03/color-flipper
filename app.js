const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
  color.textContent = generateRandomColor() // -> #34c7aa
});

function generateRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
  //random color will be freshly served
}