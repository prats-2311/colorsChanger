const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomCode = randomNumberGen();
  document.body.style.backgroundColor = randomCode;
  color.textContent = randomCode;
});
function randomNumberGen() {
  let code = "#";

  for (let i = 1; i <= 6; i++) {
    code += hex[Math.floor(Math.random() * 16)];
  }
  return code;
}
