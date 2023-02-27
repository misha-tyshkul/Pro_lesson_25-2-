"use strict";

const myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  arraySort();
});

const arraySort = () => {
  const num = myForm.number.value;
  const inputValue = num.split(",").map((number) => Number(number));
  const radio1 = document.querySelector("#up");
  const radio2 = document.querySelector("#down");
  if (radio1.checked === true) {
    inputValue.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
  if (radio2.checked === true) {
    inputValue.sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });
  }

  console.log(inputValue);
};
