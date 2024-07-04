// when the DOM is fully loaded:
document.addEventListener("DOMContentLoaded", function() {
   const value = document.querySelector("#value");
   const btns = document.querySelectorAll("button");

   // set the initial counter:
   let counter = 0;

   // add click event listener to the buttons:
   btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
         const currentButton = e.currentTarget;
         
         if (currentButton.id === "decrease") {
            counter--;
            renderCounter(counter);
         } else if (currentButton.id === "increase") {
            counter++;
            renderCounter(counter);
         } else {
            counter = 0;
            renderCounter(counter);
         }
      })
   });

   // renderCounter() function defination:
   function renderCounter(number) {
      if (number < 0) {
         value.textContent = number;
         value.style.color = "red"
      } else if (number > 0) {
         value.textContent = number;
         value.style.color = "green"
      } else {
         value.textContent = number;
         value.style.color = "black";
      }
   }
});
