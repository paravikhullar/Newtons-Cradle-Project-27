class Bob {
    constructor(x, y,color) {
      var options = {
          isStatic:false,
          restitution:1.2,
          friction:0.2,
          density:4
          
      }
      
      this.body = Matter.Bodies.circle(x, y, 25, options);
      this.width = 50;
      this.height = 50;
      //this.radius = radius;*/
      this.color = color;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    //   rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      
      ellipse(0,0,this.width,this.height);
      pop();
    }
  };