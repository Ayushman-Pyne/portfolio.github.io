window.onload = function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(function () {
    preloader.style.display = "none";
    mainContent.style.display = "block";
  }, 6000);
};

setTimeout(function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  preloader.style.display = "none";
  mainContent.style.display = "block";
}, 10000);
