let userInput = document.getElementById("expression");
userInput.textContent = "";

function addBorder(item) {
  let currElementId = "item" + item;
  let currElement = document.getElementById(currElementId);
  currElement.classList.add("border");
}

function removeBorder() {
  let classList = document.getElementsByClassName("border");
  while (classList.length) {
    classList[0].classList.remove("border");
  }
}

function checkExpression(stringVal) {
  const lastChar = stringVal[stringVal.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    alert("Can't add more operators");
    return false;
  }
  return true;
}

function checkResult(stringVal) {
  const lastChar = stringVal[stringVal.length - 1];
  if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(lastChar)) {
    alert("Nothing to be Evaluated");
    return false;
  }
  return true;
}

function evaluate(stringVal) {
  try {
    return eval(stringVal);
  } catch (e) {
    alert("Invalid Expression");
    return "";
  }
}

document.body.onkeydown = function (event) {
  event.preventDefault();
  let curr = event.key;
  switch (curr) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      addBorder(curr);
      userInput.textContent += curr;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (checkExpression(userInput.textContent)) {
        addBorder(curr);
        userInput.textContent += curr;
      }
      break;
    case "Alt":
    case "Shift":
    case "Backspace":
      break;
    case "Enter":
    case "=":
      if (checkResult(userInput.textContent)) {
        var result = evaluate(userInput.textContent);
        userInput.textContent = result;
      }
      break;
    case "c":
    case "C":
      addBorder("c");
      userInput.textContent = "";
      break;
    default:
      alert("Wrong Input. Please Try Again.");
  }
};

document.body.onkeyup = function () {
  removeBorder();
};

const buttons = [
  { id: "item7", value: "7" },
  { id: "item8", value: "8" },
  { id: "item9", value: "9" },
  { id: "item+", value: "+" },
  { id: "item4", value: "4" },
  { id: "item5", value: "5" },
  { id: "item6", value: "6" },
  { id: "item-", value: "-" },
  { id: "item1", value: "1" },
  { id: "item2", value: "2" },
  { id: "item3", value: "3" },
  { id: "item*", value: "*" },
  { id: "item0", value: "0" },
  { id: "item/", value: "/" },
];

buttons.forEach((button) => {
  let btn = document.getElementById(button.id);
  btn.addEventListener("click", function () {
    userInput.textContent += button.value;
  });
});

let btnc = document.getElementById("itemc");
btnc.addEventListener("click", function () {
  userInput.textContent = "";
});

let btnResult = document.getElementById("item=");
btnResult.addEventListener("click", function () {
  if (checkResult(userInput.textContent)) {
    var result = evaluate(userInput.textContent);
    userInput.textContent = result;
  }
});
