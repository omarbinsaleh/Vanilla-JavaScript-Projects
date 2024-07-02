document.addEventListener("DOMContentLoaded", function () {
  const color = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const colorName = document.querySelector(".color-name");
  const btn = document.querySelector(".btn");
  const body = document.querySelector("#body");

  // add click event handler to the button:
  btn.addEventListener("click", function () {
    const hexColor = getColorName()
    colorName.textContent = `Hex Code : ${hexColor}`;
    body.style.backgroundColor = hexColor;
  });

  // getColor() function declaration:
  function getColorName() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * color.length);
      hex += color[randomNumber]
    }

    return hex;
  }

})