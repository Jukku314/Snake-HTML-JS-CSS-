
class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * (canvas.width / dim)) * dim;
        this.y = Math.floor(Math.random() * (canvas.height / dim)) * dim;
    }

    show() {
        context.fillStyle = "rgba(215, 0, 100, 1)";
        context.fillRect(this.x, this.y, dim, dim);
    }

    relocate() {
        this.x = Math.floor(Math.random() * (canvas.width / dim)) * dim;
        this.y = Math.floor(Math.random() * (canvas.height / dim)) * dim;
    }

}