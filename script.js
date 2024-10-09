var loader = document.getElementById("preloader");
var mainContent = document.getElementById("main-content");

window.addEventListener(
  "load",
  setTimeout(function () {
    loader.style.display = "none";
    mainContent.style.display = "block";
  }, 6000)
);
