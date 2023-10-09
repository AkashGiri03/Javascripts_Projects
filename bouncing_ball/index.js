//get the canvas element
const canvas = document.querySelector('canvas');

//get the width and height of browser viewport

const width = window.innerWidth;
const height = window.innerHeight;

// set the width and height of canvas equal to browser viewport

canvas.width = width;
canvas.height = height;

//call the getcontext method to drar 2d shape

const ctx = canvas.getContext('2d');

//create ball class

class Ball{
    constructor(x,y,velx,vely,size,color){
        this.x = x; // horizontal position of the ball
        this.y = y; // vertical position of the ball
        this.velx = velx; // velocity x added to coordinate x when we animate our ball
        this.vely = vely; // velocity y added to coordinate y
        this.size = size; // size is a radius of the ball
        this.color = color; // fill ball shape with given color
    }

    // create draw function
    drawBall(){
        ctx.beginPath(); // start drawing 
        ctx.fillStyle = this.color; // fill ball shape with given color 
        //x and y is center of the ball 
        // size is radius of the ball
        // 0 is a start point of degree around radius of the ball
        //2*math.pi is an end point which is equivalent to 360 degree
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill(); 
     }

     // create update function
     updateBall(){
        //if x anf y position is greate than or ledd than 
        //browser viewport than balls turn onather direction
        if(this.x + this.size >= width || this.x - this.size <=0){
            this.velx = -this.velx;
        }
        if(this.y + this.size >= height || this.y - this.size <=0){
            this.vely = -this.vely;
        }

        // x and y velocity added to x and y coordinate 
        // everytime updateBall func is called 
        this.x += this.velx;
        this.y += this.vely;
     }


}

//create random number generator func
function random(min ,max){
    const num = Math.floor(Math.random()*(max-min +1))+min;
    return num; 
}


//create some ball and store in an array
const  balls = [];

while (balls.length < 40) {

    let size = random(10,20);

   // create a new instance of Ball class
   // now replace static number with random number
   const ball = new Ball(random(size,width-size),
   random(size,height - size),
   random(-11,11),
   random(-11,11),
   size ,
   `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`);

   balls.push(ball);

}

// create loop func

function loop(){

    //cover the previous frame's drawing before the next one os drawn
    ctx.fillStyle = 'rgba(0 , 0 , 0 , 0.25)';
    ctx.fillRect(0 ,0 ,width , height)
    // run necessary func
    for(let i = 0;i < balls.length;i++){
        balls[i].drawBall();
        balls[i].updateBall();
    }

    // lets call loop func itself over and over again
    // and make animation smooth
    requestAnimationFrame(loop);
}

//finally call the loop func once at start
loop();


