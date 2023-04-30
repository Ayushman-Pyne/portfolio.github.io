var loader = document.getElementById("preloader");

window.addEventListener("load" , setTimeout(function(){
  loader.style.display = "none";
}, 6000))

// function(){
//   loader.style.display = "none";
// }
// if(document.readyState === 'complete') {
//   function();
// }
