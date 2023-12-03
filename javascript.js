//const btnrock = document.querySelector(".rock");

const add = function (numInputOne, numInputTwo) {
  return numInputOne + numInputTwo;
};

const subtract = function (numInputOne, numInputTwo) {
  return numInputOne - numInputTwo;
};

const sum = function (arrayInput) {
  let sum = 0;
  arrayInput.forEach((item) => (sum += parseInt(item)));
  return sum;
};

const multiply = function (arrayInput) {
  let sum = arrayInput[0];
  arrayInput.forEach(function (item, index) {
    if (index != 0) {
      sum *= parseInt(item);
    }
  });
  return sum;
};

const power = function (intInput, toPower) {
  let sum = intInput;
  for (let i = 0; i < toPower - 1; i++) {
    sum *= intInput;
  }
  return sum;
};

const factorial = function (intInput) {
  let sum = intInput;
  if (intInput == 0) {
    return 1;
  }
  for (let i = intInput - 1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};
