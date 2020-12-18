// Main js file

var showSidebar = (selector) => {
  document.querySelector(selector).classList.add("active");
  document.querySelector(selector).style.transition = "transform 0.5s";
}
var hideSidebar = (selector) => {
  document.querySelector(selector).classList.remove("active");
}
var showPopup = (selector) => {
  document.querySelector(selector).classList.add("open");
}
var hidePopup = (selector) => {
  document.querySelector(selector).classList.remove("open");
}
var inputFile = document.getElementById('input-file');

document.querySelector(".open-menu").addEventListener("click", () => {
  showSidebar(".sidebar");
});
document.querySelector(".close-menu").addEventListener("click", () => {
  hideSidebar(".sidebar");
});
document.querySelector(".open-popup").addEventListener("click", () => {
  showPopup(".popup-background");
});
document.querySelectorAll(".close-popup").forEach((node) => {
  node.addEventListener("click", () => {
    hidePopup(".popup-background");
  });
});
inputFile.addEventListener('change', function () {
  for (var x = 0; x < this.files.length; x++) {
    var file = this.files[x]
  }
  document.getElementById('upload-text').value = file.name;
});