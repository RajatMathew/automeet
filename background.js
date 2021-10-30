chrome.tabs.onCreated = () => {
  alert("New tab opened");
};

function changer() {
  document.querySelector("disabled")[0].backgroundColor = "red";
}

// Reusable functions
function gId(id) {
  return document.getElementById(id);
}

function changeBg(id, color) {
  gId(id).style.backgroundColor = color;
}

// Style changers
function successGreen() {
  changeBg("submit-button", "rgb(0, 189, 0)");

  gId("btn-icon").src = "images/tick.svg";
  gId("btn-icon").classList = "tick";
}

function failedRed() {
  changeBg("submit-button", "red");
  gId("submit-button").innerHTML = "!";
}

function loader() {
  gId("btn-icon").src = "images/loader.svg";
  gId("btn-icon").classList = "tick loader";
}
function initialButtonState() {
  gId("btn-icon").src = "images/arrow.svg";
  changeBg("submit-button", "blue");
  gId("btn-icon").classList = "tick";
}
