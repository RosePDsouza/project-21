class Ground {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      

      let options = {
        isStatic:true
      };
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body)
    }
    display(){

    push()
    translate(this.body.position.x,this.body.position.y)
    fill("red");
    strokeWeight(4)
    rectMode(CENTER)
      rect (  0,0,this.width,this.height);
  pop()
    }

  }

    

