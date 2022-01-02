class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.dir = [1, 0];
        this.tail = [];
        this.col = "#FFF"
    }
    show() {
        context.fillStyle = this.col;
        context.fillRect(this.x, this.y, dim, dim);
        for (let i = 0; i < this.tail.length; i++) {
            context.fillRect(this.tail[i].x, this.tail[i].y, dim, dim);
        }
    }

    move() {
        if (this.tail.length > 0) {
            for (let i = this.tail.length - 1; i > 0; i--) {
                this.tail[i].x = this.tail[i - 1].x;
                this.tail[i].y = this.tail[i - 1].y;
            }   
            this.tail[0].x = this.x;
            this.tail[0].y = this.y;
        }

        this.x += this.dir[0] * dim;
        this.y += this.dir[1] * dim;
    }

    keyPressed() {
        window.addEventListener('keydown', (event) => {
            if (event.key === "w") {
                this.dir = [0, -1];
            } else if (event.key === "s") {
                this.dir = [0, 1];
            } else if (event.key === "a") {
                this.dir = [-1, 0];
            } else if (event.key === "d") {
                this.dir = [1, 0];
            }
        })
    }

    eat_apple() {
        if (this.x == a.x && this.y == a.y) {
            a.relocate();
            this.tail.push([this.x, this.y]);
        }
    }

    collide() {
        if ((this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0)) {
            this.col = "#F00"
            lose = true;
        }
        for (let i = 0; i < this.tail.length; i++) {
            if ((this.x == this.tail[i].x && this.y == this.tail[i].y)) {
                this.col = "#F00"
                lose = true;
            }
        }
    }
}