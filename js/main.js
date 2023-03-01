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
  const sortDirection = radio1.checked;
  inputValue.sort((a, b) => {
    if (sortDirection === true) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    } else {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  });

  console.log(inputValue);
};
