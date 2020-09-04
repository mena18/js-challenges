
class Point{
  constructor(array){
    this.x=Math.floor(Math.random()*700);
    this.y=Math.floor(Math.random()*600);
    this.a= Math.floor(Math.random()*10);
    this.speed=8;
  }
  
  update(){
    if(mouseX > 400){
      this.x-=this.speed;
    }else if(mouseX < 200){
      this.x+=this.speed;
    }
    
    if(mouseY > 400){
      this.y-=this.speed;
    }else if(mouseY < 200){
      this.y+=this.speed;
    }
    
    if(this.x<0 || this.x>600 || this.y<0 || this.y>600){
      this.reset();
    }
  }
  
  reset(){
    this.x=Math.floor(Math.random()*700);
    this.y=Math.floor(Math.random()*600);
    this.a= Math.floor(Math.random()*10);
  }
  
  draw(){
      ellipse(this.x,this.y,this.a,this.a);
  }
}


var lis = [];


function setup() {
  createCanvas(600, 600);
  for(let i=0;i<80;i++){
    lis.push(new Point());
  }
}


function draw() {
  background(0);
  

  for(let k=0;k<lis.length;k++){
    lis[k].update();
  }
  
  for(let k=0;k<lis.length;k++){
    lis[k].draw();
  }
  
}





