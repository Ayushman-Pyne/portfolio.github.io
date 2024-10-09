var loader = document.getElementById("preloader");

window.addEventListener("load" , setTimeout(function(){
  loader.style.display = "none";
  mainContent.style.display = 'block';
}, 6000))

// function(){
//   loader.style.display = "none";
// }
// if(document.readyState === 'complete') {
//   function();
// }
