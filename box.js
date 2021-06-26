class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':5.0,
          'density':1.0
      }
    

      this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    }
    display(){
      if(this.body.speed < 2){
         var angle = this.body.angle;
         var pos = this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(2);
          stroke("black");
          fill("green");
          rect(0, 0, this.width, this.height);
          pop();
        } else {
          World.remove(world,this.body);
  
         push();
  
         this.visibility = this.visibility -5;
  
         pop();
       }
  
  
    }
  };
