const canvas = document.getElementById("Snake");
const context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const dim = 32;

let s = new Snake();
let a = new Apple();

let lose = false;

const draw = () => {
    // background(0)
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // apple
    a.show();

    // snake
    if (!lose) {
        s.keyPressed();
        s.move();
        s.eat_apple();
        s.collide();
    } else {
        alert("go to hell :D");
    }
    s.show();
}

setInterval(draw, 60);