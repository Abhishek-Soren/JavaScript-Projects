let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");

let watch = document.getElementById("watch");

function removeColorOutline() {
  let colorContainer = document.querySelector("#color-wrapper");
  let borderClassElements = colorContainer.getElementsByClassName("border");
  for (let i = 0; i < borderClassElements.length; i++) {
    borderClassElements[i].classList.remove("border");
  }
}

function chooseColor(num, currElement) {
  removeColorOutline();
  switch (num) {
    case 1:
      watch.src = "./Assets/Blue.png";
      watch.alt = "Blue Smart Watch";
      break;
    case 2:
      watch.src = "./Assets/Purple.png";
      watch.alt = "Purple Smart Watch";
      break;
    case 3:
      watch.src = "./Assets/Black.png";
      watch.alt = "Black Smart Watch";
      break;
    case 4:
      watch.src = "./Assets/Red.png";
      watch.alt = "Red Smart Watch";
      break;
    case 5:
      watch.src = "./Assets/Pink.png";
      watch.alt = "Pink Smart Watch";
      break;
    default:
      console.error("Invalid color number");
      break;
  }
  currElement.classList.add("border");
}

color1.addEventListener("click", function () {
  chooseColor(1, this);
});

color2.addEventListener("click", function () {
  chooseColor(2, this);
});

color3.addEventListener("click", function () {
  chooseColor(3, this);
});

color4.addEventListener("click", function () {
  chooseColor(4, this);
});

color5.addEventListener("click", function () {
  chooseColor(5, this);
});

let feature1 = document.getElementById("feature1");
let feature2 = document.getElementById("feature2");

function removeFeatureOutline() {
  let featureContainer = document.querySelector("#feature-wrapper");
  let borderClassElements = featureContainer.getElementsByClassName("border");
  for (let i = 0; i < borderClassElements.length; i++) {
    borderClassElements[i].classList.remove("border");
  }
}

function heartRate() {
  let parent = document.getElementById("watch-face");
  let child1 = document.createElement("div");
  child1.id = "heart-rate-image";
  let child2 = document.createElement("div");
  child2.id = "heart-rate-text";
  child2.textContent = "78";
  parent.appendChild(child1);
  parent.appendChild(child2);
}

function dateAndTime() {
  let parent = document.getElementById("watch-face");

  // Create a div for date and time
  let dateDiv = document.createElement("div");
  let timeDiv = document.createElement("div");

  // Function to update date and time
  function updateTime() {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString();
    let formattedTime = currentDate.toLocaleTimeString();

    dateDiv.textContent = formattedDate;
    timeDiv.textContent = formattedTime;
  }

  dateDiv.id = "date";
  timeDiv.id = "time";

  updateTime();

  setInterval(updateTime, 1000);

  parent.appendChild(dateDiv);
  parent.appendChild(timeDiv);
}

function removeChild() {
  let parent = document.getElementById("watch-face");
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

function chooseFeature(num, currElement) {
  removeFeatureOutline();
  switch (num) {
    case 1:
      removeChild();
      console.log("case1");
      dateAndTime();
      break;
    case 2:
      removeChild();
      console.log("case2");
      heartRate();

      break;
    default:
      console.error("Invalid color number");
      break;
  }

  currElement.classList.add("border");
}

feature1.addEventListener("click", function () {
  chooseFeature(1, this);
});
feature2.addEventListener("click", function () {
  chooseFeature(2, this);
});
