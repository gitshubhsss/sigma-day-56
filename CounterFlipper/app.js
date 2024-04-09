let decreBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let incBtn = document.querySelector(".increase");
let num = document.querySelector(".numbers");
let counter = 0;

resetBtn.addEventListener("click", () => {
    counter=0;
    // num.innerHTML=`<p>${counter}</p>`
    num.innerText=counter;
});

incBtn.addEventListener("click", () => {
  num.innerText = counter + 1;
  counter++;
});

decreBtn.addEventListener("click", () => {
  if (counter > 0) {
    num.innerText = counter - 1;
    counter--;
  }
});
