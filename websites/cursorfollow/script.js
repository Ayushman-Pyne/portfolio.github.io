const cursorElement = document.getElementById('cursor')

const mouse = {x:0, y:0}
const prevmouse = {x:0, y:0};
const cursor = {x:0, y:0}


window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.17;
let curscale = 0;
let curAngle = 0;

const tick = () => {

    cursor.x += (mouse.x - cursor.x) * speed;
    cursor.y += (mouse.y - cursor.y) * speed;
    const translateTransform = `translate(${cursor.x}px,${cursor.y}px)`;


    // Squeeze
    const deltamouseX = mouse.x - prevmouse.x;
    const deltamouseY = mouse.y - prevmouse.y;
    prevmouse.x = mouse.x;
    prevmouse.y = mouse.y;

    const mouseVel = Math.min(Math.sqrt(deltamouseX**2 + deltamouseY**2) * 4 , 150);
    const scaleValue = (mouseVel / 150) * 0.5;

    curscale += (scaleValue - curscale) * speed;

    const scaleTransform = `scale(${1 + curscale}, ${1 - curscale})`;

    const angle = Math.atan2(deltamouseY, deltamouseX) * 180 / Math.PI;
    if (mouseVel > 10) {
        curAngle = angle;
    }
    const rotateTransform = `rotate(${curAngle}deg)`;

    cursorElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

    window.requestAnimationFrame(tick);
}

tick();