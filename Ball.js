class Ball{

    constructor(x,y,r){

        var options = {density:1.0, friction: 0.5};

        this.body = Bodies.circle(x,y,r, options);
        this.r = r
        this.image = loadImage("Ball.png")
        World.add(world, this.body)
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x ,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 160, 170);
        pop();

        
    }
}