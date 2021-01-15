class ground {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=this.height;
        this.body=Bodies.rectangle(x, y, w, h , options);
         World.add(world, this.body);
    }
    display()
    {
        var groundposition=this.body.position;
        push()
        translate(groundposition.x, groundposition.y);
			rectMode(CENTER)
			strokeWeight(4);
		//	fill('white')
			rect(0,0,this.width, this.height);
			pop()
			
    }
}