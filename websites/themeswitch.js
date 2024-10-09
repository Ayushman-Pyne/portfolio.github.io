document.querySelector("#theme-switcher").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("theme-light");
  document.querySelector("body").classList.toggle("theme-dark");
});
