class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(800, 500, 1600, 10, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill("green");
        rectMode(CENTER);
        rect(pos.x, pos.y, 1600, 30);
        pop();
    }
};