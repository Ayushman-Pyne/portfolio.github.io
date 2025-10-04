const circles = document.querySelectorAll('#cursor .circle')

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
    circle.style.backgroundColor = "#121212";
});

const mouse = {x:0, y:0};
const prevmouse = {x:0, y:0};
const cursor = {x:0, y:0};


window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {

    let x = mouse.x;
    let y = mouse.y;

    circles.forEach(function (circle, index) {

    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;


    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * speed;
    y += (nextCircle.y - y) * speed;
  });

    window.requestAnimationFrame(tick);
}

tick();