class dustbin{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.dusbinHeight=100;
        this.dustbinWidth=200;
        this.wallThickness=20;
        this.angle=0;

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)

		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
        
        Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
        
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        
        World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

    }
    display(){
        var positionBottom=this.bottomBody.position;
        var positionLeft=this.leftWallBody.position;
        var positionRight=this.rightWallBody.position;

            push()
            translate(positionLeft.x,positionLeft.y);
            rectMode(CENTER);
            strokeWeight(4);
            angleMode(RADIANS)
            fill(255)
            stroke(255)
            rotate(this.angle)
            rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()

            
            push()
			translate(positionRight.x, positionRight.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            push()
			translate(positionBottom.x, positionBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			

    }

}