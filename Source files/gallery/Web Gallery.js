function expandThumbnail(thumbnail) {
  var expandedImg = document.getElementById("expandedImg");
  var description = document.getElementById("description");
  var thumbnailImg = thumbnail.getElementsByTagName("img")[0];
  expandedImg.src = thumbnailImg.src;
  description.innerHTML = thumbnailImg.getAttribute("data-description");
  document.getElementById("expandedView").style.display = "block";
}

function closeExpandedView() {
  document.getElementById("expandedView").style.display = "none";
}
function handleButtonClick(buttonIndex) {
  var extendedView = document.getElementById("expandedView");
  switch (buttonIndex) {
    case 1: // Dark button
      extendedView.style.backgroundColor = "black";
      break;
    case 2: // Light button
      extendedView.style.backgroundColor = "gray";
      break;
    case 3: // Random button
      var randomColor = getRandomColor();
      extendedView.style.backgroundColor = randomColor;
      break;
    default:
      break;
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = function () {
  // Get references to necessary elements
  var fontSelector = document.querySelector(".fontSelector");
  var description = document.getElementById("description");

  // Add event listener to the font selector dropdown
  fontSelector.addEventListener("change", function () {
    // Get the selected font family
    var selectedFont = fontSelector.value;

    // Update the font family of the description element
    description.style.fontFamily = selectedFont;
  });
};
