class Paper {
    constructor() {
        var options = {
            restitution : 0.3,
            density: 1.5,
            friction: 0.5,
            isStatic: false
        }
        this.body = Bodies.circle(50, 100, 20, options);

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        strokeWeight(2.9);
        ellipseMode(CENTER);
        stroke("white");
        fill("red");
        ellipse(pos.x, pos.y, 20, 20);
        pop();
    }
};
