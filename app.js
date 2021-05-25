const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("dark-mode");
});

jQuery(document).ready(function ($) {
  $(window).load(function () {
    setTimeout(function () {
      // Animate loader off screen
      $(".se-pre-con").fadeOut("slow", function () {});
    }, 0500);
  });
});

function toggleDiv() {
  // get the Div
  var myDiv = document.getElementById("react__projects");

  // get the current value of the Div's display property
  var displaySetting = myDiv.style.display;

  // also get the Div button, so we can change what it says
  var DivButton = document.getElementById("react");

  // now toggle the Div and the button text, depending on current state
  if (displaySetting == "block") {
    // Div is visible. hide it
    myDiv.style.display = "none";
    // change button text
    DivButton.innerHTML = "ReactJS";
  } else {
    // Div is hidden. show it
    myDiv.style.display = "block";
    // change button text
    DivButton.innerHTML = "Hide Projects";
  }
}

function toggleDivJS() {
  // get the Div
  var myDiv = document.getElementById("js__projects");

  // get the current value of the Div's display property
  var displaySetting = myDiv.style.display;

  // also get the Div button, so we can change what it says
  var DivButton = document.getElementById("vanilla");

  // now toggle the Div and the button text, depending on current state
  if (displaySetting == "block") {
    // Div is visible. hide it
    myDiv.style.display = "none";
    // change button text
    DivButton.innerHTML = "vanillaJS";
  } else {
    // Div is hidden. show it
    myDiv.style.display = "block";
    // change button text
    DivButton.innerHTML = "Hide Projects";
  }
}
